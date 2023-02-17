// Styled components
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles, { ContainerGlobal } from "./styles/global";
import Modal from 'react-modal';

import { Routes } from  './routes'
Modal.setAppElement('#root');

import { AuthProvider } from "./contexts/auth";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
                <AuthProvider>
                    <Routes />
                </AuthProvider>
        </ThemeProvider>
    )
}

export default App
