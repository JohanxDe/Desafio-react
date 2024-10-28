import React, {createContext, useState, useContext } from 'react';

//crear el contexto
const CartContext = createContext();

//Proveedor del contexto (logica de los productos)

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])



    //Funcion para agregar productos al carrito
    const addToCart = (product) => {
        const itemInCart = cartItems.find((item) => item.id === product.id);

        if(itemInCart){
            setCartItems(cartItems.map (item =>
                item.id === product.id ? {...item, quantity: item.quantity +1 } : item
            ))
        }
        else{
            setCartItems([...cartItems,{... product, quantity:1}]);
        };
    };

    //Funcion para eliminar productos del carrito
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    //Funcion para calcular el total del carrito
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return(
        <CartContext.Provider value ={{ cartItems, addToCart, removeFromCart, calculateTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);