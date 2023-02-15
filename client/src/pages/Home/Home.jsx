import { ContainerGlobal } from '../../styles/global'
import { Container } from "./stylesHome"
import { Card } from "../../components/Card/Card"
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'

export const Home = () => {

    return (
        <Container>
            <Header />
            <Categories />
            <ContainerGlobal>
                <Card />
            </ContainerGlobal>
            <Footer />
        </Container>
    )
}
