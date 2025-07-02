'use client'

import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((currentItems) => [...currentItems, product])
    }

    const removeFromCart = (index) => {
        setCartItems((currentItems) => currentItems.filter((_, i) => i !== index));
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
