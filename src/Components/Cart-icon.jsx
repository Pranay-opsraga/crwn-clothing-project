import ShoppingIcon from "../assets/shopping-bag.svg?react"
import { CartContext } from "../contexts/cart-context"
import { useContext } from "react";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);

    const toggle = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="relative w-7 h-7 cursor-pointer" onClick={toggle}>
            <ShoppingIcon className="w-full h-full" />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold pt-1">{cartCount}</span>
        </div>
    )
}

export default CartIcon;