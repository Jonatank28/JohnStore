import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Form/Button/Button';

export const FormModalRegister = ( { btn1, btn2, closeModal }) => {

    const validationSchema = {

    }

    function handleSubmit() {

    }

    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <label htmlFor="name">Nome</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" />

                <Button
                    onclick={closeModal}
                    title={btn1}
                />
                <Button
                    title={btn2}
                    type="submit"
                />
            </Form>
        </Formik>
    )
}
