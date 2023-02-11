import { Container } from "./styleSignIn"
import { Formik, Form, Field, ErrorMessage } from 'Formik'
import * as Yup from "yup";
import imageTeste from '../../assets/imageTeste.jpg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth' 

export const SignIn = () => {
    const { signIn } = useAuth();

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        password: Yup.string()
            .min(8, "Quantidade mínima de caracteres é de 8")
            .required("Campo obrigatório")
    });

    function handleLogin(values) {
        signIn(values)
    }

    return (
        <Container>
            <div>
                <div>
                    <h1>Entrar</h1>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => handleLogin(values)}
                    >
                        <Form className="form">
                            <span><ErrorMessage name='name' /></span>
                            <label>E-mail</label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="E-mail"
                            />
                            <span><ErrorMessage name='email' /></span>

                            <label>Senha</label>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Senha"
                            />
                            <span><ErrorMessage name='password' /></span>

                            <button type="submit" >Salvar</button>
                        </Form>
                    </Formik>
                    <Link to="register">Ainda não tem conta</Link>
                </div>
            </div>
            <div>
                <img src={imageTeste} alt="Imagem tela SignIn" />
            </div>
        </Container >
    )
}
