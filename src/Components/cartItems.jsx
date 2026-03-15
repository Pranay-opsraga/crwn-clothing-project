
const CartItems = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <div className="flex mb-5 w-full h-[80px] mt-5">
            <img className="w-[30%] h-[90%] object-cover " src={imageUrl} alt={name} />
            <div className="flex flex-col ml-5 justify-center ">
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <span>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItems;