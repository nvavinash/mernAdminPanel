import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLs =(serverToken )=>{
        return localStorage.setItem("token", serverToken);
    };
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    };

    // Login and Logout Visibility on page 
    let isLoggedIn = !!token;
    

return(
    <AuthContext.Provider value ={{isLoggedIn,storeTokenInLs,LogoutUser}}>
        {children}
    </AuthContext.Provider>
);
};

export const useAuth =( ) => {
    return useContext(AuthContext);
}