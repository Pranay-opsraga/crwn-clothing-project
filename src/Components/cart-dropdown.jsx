
const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container absolute w-[290px] h-[400px] flex flex-col top-[90px] right-[50px] bg-white border border-black z-50 justify-center items-center">
            <div className="cart-items flex flex-col overflow-y-auto">
                {/* Cart items will go here */}
            </div>
            <button className="w-[80%] h-[50px] bg-black text-white uppercase mt-auto flex items-center justify-center hover:bg-white hover:text-black cursor-pointer hover:border hover:border-black hover:border-solid mb-5">GO TO CHECKOUT</button>

        </div>
    )
}

export default CartDropdown;