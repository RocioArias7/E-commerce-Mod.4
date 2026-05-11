import { ILoginFormValues } from "@/interfaces/login.interface";
import { IRegisterFormValues } from "@/interfaces/register.interface";
const API_URL = process.env.NEXT_PUBLIC_API_URL


export const registerUser = async (userData: IRegisterFormValues) => {
    try {
    const responseRegister = await fetch (`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });
     if (responseRegister.ok) {
        return responseRegister.json();
     }else {
        alert("No pudimos registrarte");
        throw new Error ("Registro fallido");
     }
    } catch (error){ 
        throw new Error (error as string)
    }
};


export const loginUser = async (userData: ILoginFormValues) => {
   try {
    const responseRegister = await fetch (`${API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });
     if (responseRegister.ok) {
        return responseRegister.json();
     }else {
        alert("No pudimos loguearte");
        throw new Error ("Registro fallido");
     }
    } catch (error){ 
        throw new Error (error as string)
    }
};
