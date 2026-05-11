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




export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const {dataUser} = useAuth();

    const [cartItems, setCartItems] = useState<IProduct[]   | []>(() => {
        if (typeof window !== "undefined") {
            const cartData = localStorage.getItem("cart");
            return cartData ? JSON.parse(cartData) : [];
            
        }
        return [];
    
});



useEffect(() => {
    if (cartItems.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
        localStorage.removeItem("cart");
    }
}, [cartItems]);


const addToCart = (product: IProduct) => {
    if (!dataUser) {
        alert("Debes iniciar sesión para agregar productos al carrito.");
        return;
    }


    const productDuplicate = cartItems.some((item) => item.id === product.id);
    if (productDuplicate) {
        alert("El producto ya está en el carrito.");
        return;
    }



    setCartItems([...cartItems, product]);
};


const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => 
        prevItems.filter((item) => item.id !== productId),

);
};



const clearCart = () => {
    setCartItems([]);

};


const cartItemsCount = (): number => {
    return cartItems.length;
};




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