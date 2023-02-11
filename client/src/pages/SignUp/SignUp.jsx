import { Container } from "./styleSignIn"

// Libs
import { Formik, Form, Field, ErrorMessage } from 'Formik'
import * as Yup from "yup";

// Photo
import imageTeste from '../../assets/imageTeste.jpg'

// Conexão banco de dados
import { db } from '../../config/db'

import { Link, useNavigate } from 'react-router-dom'



export const SignUp = () => {

    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required("Campo obrigatório"),
        email: Yup.string()
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        password: Yup.string()
            .min(8, "Quantidade mínima de caracteres é de 8")
            .required("Campo obrigatório")
    });

    async function handleRegister(values) {
        await db.post("/register", values)
        .then((response) => {
            alert(response.data.message)
            if(response.status === 200){
                navigate("/");
            }
        })
        .catch((error) => {
            if(error.response){
                alert(error.response.data.message)
            } else{
                console.log("Não foi possível cadastrar")
            }
        })
        
    }
    return (
        <Container>
            <div>
                <img src={imageTeste} alt="Imagem tela SignIn" />
            </div>
            <div>
                <div>
                    <h1>Cadastre-se</h1>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => handleRegister(values)}
                    >
                        <Form className="form">
                        <label>Nome</label>
                            <Field
                                name="name"
                                type="text"
                                placeholder="Nome"
                            />
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
                    <Link to="/">Fazer login</Link>
                </div>
            </div>
        </Container >
    )
}

