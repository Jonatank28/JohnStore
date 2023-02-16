import { Container, ContainerContent } from "./stylesHeader"
import { ContainerGlobal } from '../../styles/global';

import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.webp';
import { Search } from "../Search/Search";

export const Header = () => {
    return (
        <Container>
            <ContainerGlobal>
                <ContainerContent>
                    <a href="#">
                        <img src={logo} alt="Logo loja" />
                    </a>
                    <Search />
                    <GiHamburgerMenu className="iconeHamburger"/>
                </ContainerContent>
            </ContainerGlobal>
        </Container>
    )
}
