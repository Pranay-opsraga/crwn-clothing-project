import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import CheckoutItems from "./checkoutItems";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart, clearItemToCart, cartTotal } = useContext(CartContext);
    return (
        <div className="flex flex-col w-full max-w-7xl mx-auto py-10  px-10 justify-center items-center">
            <div className="w-full border-b border-gray-300 pb-4 mb-2 flex text-sm font-semibold uppercase tracking-wide text-gray-500">
                <div className="w-1/5">Product</div>
                <div className="w-1/5">Description</div>
                <div className="w-1/5 text-center">Quantity</div>
                <div className="w-1/5 text-center">Price</div>
                <div className="w-1/5 text-center">Remove</div>
            </div>

            {cartItems.map((item) => (
                <CheckoutItems key={item.id} Items={item} addItemToCart={addItemToCart} removeItemToCart={removeItemToCart} clearItemToCart={clearItemToCart} />
            ))}

            <span className="text-2xl ml-auto">Total: $ {cartTotal}</span>

        </div>
    );
}

export default Checkout;