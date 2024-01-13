import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userN,setUser] = useState("");

    const storeTokenInLs =(serverToken )=>{
        return localStorage.setItem("token", serverToken);
    };
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    };

    // Login and Logout Visibility on page 
    let isLoggedIn = !!token;

    //JWT authentication-------
    const userAuthentication = async( req,res)=>{
        try{
            const response = await fetch("http://localhost:8080/api/auth/user",{
                method: "GET",
                header:{
                    Authorization: `Bearer ${token}`,
                },
            });
            if(response.ok){
                const data = await response.json();
                setUser(data);
                console.log(`thsi is usredata ${data}`)
            }
        }catch(error){
            console.log("user data fetch error.",error)
        }
    }

    useEffect(()=>{
        userAuthentication();
    })

return(
    <AuthContext.Provider value ={{isLoggedIn,storeTokenInLs,LogoutUser,userN}}>
        {children}
    </AuthContext.Provider>
);
};

export const useAuth =( ) => {
    return useContext(AuthContext);
}