import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../contexts/auth"

export function Routes(){
    const { user } = useAuth();

    
    return(
        <BrowserRouter>
            <AppRoutes/>
            {/* {user ? <AppRoutes/> : <AuthRoutes/>} */}
        </BrowserRouter>
    )
}

