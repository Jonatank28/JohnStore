import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Form/Button/Button';
import './stylesFormModalRegister.css'

export const FormModalRegister = ({ btn1, btn2, closeModal }) => {

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório'),
        idade: Yup.number()
            .required('A idade é obrigatória')
            .positive('A idade deve ser maior que zero')
            .integer('A idade deve ser um número inteiro'),
        email: Yup.string().email('Endereço de e-mail inválido').required('O e-mail é obrigatório'),
    });

    function handleSubmit() {

    }

    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className='formRegister'>
                <h3>Registrar novo produto</h3>
                <div className='inputs'>
                    <label htmlFor="title">Título</label>
                    <Field 
                        type="text" 
                        name="title" 
                        id="title"
                    />
                    <ErrorMessage name="title" component="span"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="description">Descrição</label>
                    <Field 
                        type="text"
                        as="textarea"
                        name="description" 
                        id="description"
                    />
                    <ErrorMessage name="description" component="span"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="previous_value">Valor não promocional</label>
                    <Field 
                        type="number" 
                        name="previous_value" 
                        id="previous_value"
                    />
                    <ErrorMessage name="previous_value" component="span"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="current_value">Valor promocional</label>
                    <Field 
                        type="number" 
                        name="current_value" 
                        id="current_value"
                    />
                    <ErrorMessage name="current_value" component="span"/>
                </div>
                <div className='inputs'>
                    <label htmlFor="photo">Adicionar fotos</label>
                    <Field 
                        type="file" 
                        name="photo" 
                        id="photo"
                    />
                    <ErrorMessage name="photo" component="span"/>
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
