import styled from "styled-components";

export const Container = styled.div`

`;

export const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: relative;

    a{
        img{
            width: 130px;
            position: absolute;
            top: 12px;
            left: 10px;
        }
    }

    .iconeHamburger{
        font-size: 3.5rem;
        position: absolute;
        top: 18px;
        right: 10px;
    }

`;