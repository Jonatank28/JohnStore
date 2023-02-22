import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Form/Button/Button';
import './stylesFormModalRegister.css'
import { db } from '../../config/db'

export const FormModalRegister = ({ closeModal }) => {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Este campo é obrigatório'),
        description: Yup.string().required('Este campo é obrigatório'),
        previous_value: Yup.number().required('Este campo é obrigatório'),
        current_value: Yup.number().required('Este campo é obrigatório'),
    });

    async function handleSubmit(values) {
        const data = {
            title: values.title,
            description: values.description,
            previous_value: values.previous_value,
            current_value: values.current_value,
        }
        const responseData = await db.post("/register-card", data, (err) => {
            if (err) {
                console.log(err)
            }
        })
        if(responseData.status === 200){
            console.log("Data cadastrado com sucesso!")
        }
    }

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                previous_value: '',
                current_value: '',
                photos: [],
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            <Form className='formRegister' >
                <h3>Registrar novo produto</h3>
                <div className='inputs'>
                    <label htmlFor="title">Título</label>
                    <Field
                        type="text"
                        name="title"
                        id="title"
                    />
                    <ErrorMessage name="title" component="div"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="description">Descrição</label>
                    <Field
                        type="text"
                        as="textarea"
                        name="description"
                        id="description"
                    />
                    <ErrorMessage name="description" component="div"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="previous_value">Valor não promocional</label>
                    <Field
                        type="number"
                        name="previous_value"
                        id="previous_value"
                    />
                    <ErrorMessage name="previous_value" component="div"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="current_value">Valor promocional</label>
                    <Field
                        type="number"
                        name="current_value"
                        id="current_value"
                    />
                    <ErrorMessage name="current_value" component="div"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="photos">Adicionar fotos</label>
                    <Field
                        type="file"
                        name="photos"
                        id="photos"
                        multiple="multiple"
                    />
                    <ErrorMessage name="photos" component="div"/>
                </div>
                <div className='btns'>
                    <Button
                        onclick={closeModal}
                        type="cancel"
                    />
                    <Button
                        type="submit"
                    />
                </div>
            </Form>

        </Formik>
    )
}
