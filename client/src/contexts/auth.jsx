import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../config/db"

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});
    const [modalRegisterOpen, setModalRegisterOpen] = useState(false);

    async function signIn({ email, password }){
        try{
            const response = await db.post("/login", { email, password })
            const user = response.data
            setData(user);
            localStorage.setItem("@johnstore:user", JSON.stringify(user));
        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar")
            }
        }
    }
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@johnstore:user"));
        setData(user)
    }, []);
    
    function signUp(){
        localStorage.removeItem("@johnstore:user");
        setData();
    }
    
    return(
        <AuthContext.Provider value={{ 
                signIn, 
                signUp, 
                user: data, 
                modalRegisterOpen, 
                setModalRegisterOpen,
            }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };