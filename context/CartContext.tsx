"use client"

import { IProduct } from "@/interfaces/product.interface";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface CartContextProps {
    cartItems: IProduct[]; 
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    cartItemsCount: () => number;
    getTotal: () => number; 
    getIdItems: () => number[];
   
}

const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    cartItemsCount: () => 0,
    getTotal: () => 0,
    getIdItems: () => [],
});





interface CartProviderProps {
    children: React.ReactNode;
}


//Aca traigo el dataUser del AuthContext para saber si el usuario esta logueado o no, 
// porque si no lo esta, no quiero que pueda agregar productos al carrito, por eso lo traigo aca

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const {dataUser} = useAuth();

    const [cartItems, setCartItems] = useState<IProduct[]   | []>(() => {
        if (typeof window !== "undefined") {
            const cartData = localStorage.getItem("cart");
            return cartData ? JSON.parse(cartData) : [];
            
        }
        return [];
    
});

//si mi cartItems cambia y su longitud es mayor a 0 quiere decir que guardaron algo, por ende lo guardo en el localStorage
//si no es asi, limpiamos la localStorage (porque si nuestro cartItems no tiene una log mayor a 0 
// significa que el carrito esta vacio, por ende limpiamos el localStorage pq no hay nada que guardar)

useEffect(() => {
    if (cartItems.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
        localStorage.removeItem("cart");
    }
}, [cartItems]);

//El addToCart que recibe un producto, lo agrega a mi cartItems (carrito)
const addToCart = (product: IProduct) => {
    if (!dataUser) {
        alert("Debes iniciar sesión para agregar productos al carrito.");
        return;
    }

//Antes de agregar el producto, verifico si ya existe en el carrito para evitar duplicados
    const productDuplicate = cartItems.some((item) => item.id === product.id);
    if (productDuplicate) {
        alert("El producto ya está en el carrito.");
        return;
    }

//Manten lo que ya tienes en el carrito y agrega el nuevo producto, es decir, no borres lo que ya tenias, solo agrega el nuevo producto


    setCartItems([...cartItems, product]);
};

//Este removeFromCart me remueve algo de mi carro de compras

const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => 
        prevItems.filter((item) => item.id !== productId),

);
};


//aca no se recibe nada porque solo va a limpiar el estado, osea va a limpiar el carrito 

const clearCart = () => {
    setCartItems([]);

};

//cuántos productos distintos hay en el carrito 
const cartItemsCount = (): number => {
    return cartItems.length;
};


//Esta funcion me devuelve el total del precio de los productos que tengo en el carrito, es decir,
//me hace la suma de los precios de los productos que tengo en el carrito

const getTotal = (): number => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
};





const getIdItems = () => {
    return cartItems.map((item) => item.id);
}





return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartItemsCount, getTotal, getIdItems }}>
        {children}
    </CartContext.Provider>
);
};





export const useCart = () => useContext(CartContext);