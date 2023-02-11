// Styled components
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles, { ContainerGlobal } from "./styles/global";

import { Routes } from  './routes'

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
