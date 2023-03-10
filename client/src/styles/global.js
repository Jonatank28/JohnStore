import styled,{ createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // font-family: 'Roboto', serif;
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif; 
    }
    body{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
        // background: #333;
        color: ${({ theme }) => theme.COLORS.COLOR_PRIMARY};
    }
    a{
        text-decoration: none;
    }
    button, a{
        cursor: pointer;
        transition: 0.2s;
        outline: none;
    }
    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;

export const ContainerGlobal = styled.div`
    width: min(1568px, 97vw);
    margin: 0 auto;
`;
