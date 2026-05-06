"use client";
import { IUserSession } from "@/interfaces/usersession.interface";
import {useState, useEffect, useContext} from "react";
import { createContext } from "react";



interface AuthContextProps {
    dataUser: IUserSession  | null; //sera el estado que almacena el usuario o NULL
    setDataUser: (dataUser: IUserSession  | null ) => void;
    logout: () => void;

}



const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => {},
    logout: () => {},


});

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider:  React.FC<AuthProviderProps> = ({ children }) => {

    const [dataUser,setDataUser] = useState<IUserSession | null>(() => {
        if (typeof window === "undefined") return null; //linea agregada
        
        const stored = localStorage.getItem("userSession");
        return stored ? JSON.parse(stored) : null;
    })
   useEffect(() => {
    if(dataUser) {
        localStorage.setItem("userSession", JSON.stringify(dataUser));
    } else {
        localStorage.removeItem("userSession");
    }
   }, [dataUser]);
   const logout = () => {
    setDataUser(null);
   };
   return <AuthContext.Provider value ={{dataUser, setDataUser, logout}}>
    {children}
   </AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);