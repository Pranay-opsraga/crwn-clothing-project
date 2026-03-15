import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItems) => cartItems.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItems) => cartItems.id === productToAdd.id ? { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems);
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
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
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        setCartCount(cartCount + 1);
    }
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;