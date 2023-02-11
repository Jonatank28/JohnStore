import { Container } from "./stylesHome"

import { useAuth } from "../../contexts/auth"

export const Home = () => {
    const { signUp } = useAuth();

    function handleSair(){
        signUp()
    }
    return (
        <Container>
            <h1 style={{fontSize: "40px"}} >Essa é a Home</h1>
            <button style={{fontSize: "40px"}} onClick={handleSair}>Sair</button>
        </Container>
    )
}
