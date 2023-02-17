import { Container, ContainerContent, Menu } from "./stylesHeader";
import { ContainerGlobal } from '../../styles/global';
import { useState } from "react"; 
import { useAuth } from "../../contexts/auth";
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.webp';
import { Search } from "../Search/Search";
import { Modall } from '../Modal/Modal';
import { FormModalRegister } from "../ContentModalRegister/FormModalRegister";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setModalRegisterOpen, modalRegisterOpen } = useAuth();

    function handleClickMenu(){
        setMenuOpen(!menuOpen);
    };

    function handleClickNewRegister(){
        setModalRegisterOpen(true);
    };

    function closeModal(){
        setModalRegisterOpen(false)
    }

    return (
        <Container>
            <ContainerGlobal>
                <ContainerContent>
                    <a href="#">
                        <img 
                        src={logo} 
                        alt="Logo loja" 
                    />
                    </a>
                    <Search />
                    <GiHamburgerMenu 
                        className="iconeHamburger"
                        onClick={handleClickMenu}
                    />
                    <Menu style={{display: menuOpen === true ? "flex" : "none"}}>
                        <a 
                            href="#">
                            Conta
                        </a>
                        <a 
                            onClick={handleClickNewRegister}>
                            Novo cadastro
                        </a>
                    </Menu>
                    <Modall 
                        openModal={modalRegisterOpen}
                        closeModal={closeModal}
                        btn1= "Fechar"
                        btn2= "Salvar"
                    >
                        <FormModalRegister 
                            closeModal={closeModal}
                            btn1= "Fechar"
                            btn2= "Salvar"
                        />
                    </Modall>
                </ContainerContent>
            </ContainerGlobal>
        </Container>
    )
}
