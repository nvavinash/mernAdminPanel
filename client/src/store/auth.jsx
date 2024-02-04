import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userN,setUser] = useState("");
    const [allServices,setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLs =(serverToken )=>{
        setToken(serverToken);
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
                headers:{
                    Authorization: authorizationToken,
                },
                
            });
          
            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
            
            }
        }catch(error){
            console.log("user data fetch error.",error)
        }
    }

    //to fetch the services data from the db........
    const getServices = async() =>{
        try{
            const response = await fetch("http://localhost:8080/api/data/service",{
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            if(response.ok){
                const data = await response.json();
                     // Ensure that data is an array before setting it in the state
            if (Array.isArray(data.msg)) {
                setServices(data.msg);
            } else {
                console.error("Received non-array data for services:", data.msg);
            }
          
            }

        }catch(error){
            console.log(`fetching data from db ${error}`);
        }
    }

    useEffect(()=>{
        userAuthentication();
        getServices();
    },[]);

return(
    <AuthContext.Provider value ={{isLoggedIn,storeTokenInLs,LogoutUser,userN,allServices,authorizationToken}}>
        {children}
    </AuthContext.Provider>
);
};

export const useAuth =( ) => {
    return useContext(AuthContext);
}