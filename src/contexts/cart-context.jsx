import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItems) => cartItems.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItems) => cartItems.id === productToAdd.id ? { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems);
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((cartItems) => cartItems.id === productToRemove.id);

    if (existingCartItem) {
        return cartItems.map((cartItems) => cartItems.id === productToRemove.id ? { ...cartItems, quantity: cartItems.quantity - 1 } : cartItems);
    }

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItems) => cartItems.id !== productToRemove.id)
    }

    return [...cartItems, { ...productToRemove, quantity: 1 }];
}

const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItems) => cartItems.id !== productToRemove.id)
}




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0

});

const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem('cartItems');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])


    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems((prevItems) => addCartItem(prevItems, productToAdd));
        setCartCount((prevCount) => prevCount + 1);
    }

    const removeItemToCart = (productToRemove) => {
        setCartItems((prevItems) => removeCartItem(prevItems, productToRemove));
        setCartCount((prevCount) => prevCount - 1);
    }

    const clearItemToCart = (productToRemove) => {
        setCartItems((prevItems) => clearCartItem(prevItems, productToRemove));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart, clearItemToCart, cartTotal };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;