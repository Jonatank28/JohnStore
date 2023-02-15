import { Container, ContainerContent } from "./stylesHeader"
import { ContainerGlobal } from '../../styles/global';

import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.webp';

export const Header = () => {
    return (
        <Container>
            <ContainerGlobal>
                <ContainerContent>
                    <a href="#">
                        <img src={logo} alt="Logo loja" />
                    </a>
                    <h1>Busca</h1>
                    <GiHamburgerMenu size={25}/>
                </ContainerContent>
            </ContainerGlobal>
        </Container>
    )
}
