import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import CartItems from "./cartItems";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container absolute w-[290px] h-[400px] flex flex-col top-[90px] right-[50px] bg-white border border-black z-50 items-center p-4">
            <div className="cart-items flex flex-col flex-1 min-h-0 overflow-y-auto w-full">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItems key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className="text-center text-xl mt-10 text-gray-500 w-full flex items-center justify-center flex-1">Your cart is empty</span>
                )}
            </div>
            <button className="w-50 h-10 shrink-0 bg-black text-white uppercase mt-4 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer hover:border hover:border-black hover:border-solid">GO TO CHECKOUT</button>
        </div>
    )
}

export default CartDropdown;