const CheckoutItems = ({ Items, addItemToCart, removeItemToCart, clearItemToCart }) => {
    const { name, price, quantity, imageUrl } = Items;
    return (
        <div className="flex items-center w-full border-b border-gray-200 py-4">
            {/* Product image */}
            <div className="w-1/5">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-24 h-24 object-cover"
                />
            </div>

            {/* Description */}
            <div className="w-1/5">
                <span className="text-sm font-medium">{name}</span>
            </div>

            {/* Quantity */}
            <div className="w-1/5 text-center">
                <div className="flex gap-2 justify-center">

                    <span
                        onClick={() => quantity > 1 && removeItemToCart(Items)}
                        className={quantity === 1 ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}
                    >&#10094;</span>
                    <span className="text-sm">{quantity}</span>
                    <span onClick={() => addItemToCart(Items)} className="cursor-pointer">&#10095;</span>
                </div>

            </div>

            {/* Price */}
            <div className="w-1/5 text-center">
                <span className="text-sm">${price}</span>
            </div>

            {/* Remove */}
            <div className="w-1/5 text-center">
                <span
                    onClick={() => clearItemToCart(Items)}
                    className="text-lg cursor-pointer hover:text-red-500 transition-colors"
                >
                    &#10005;
                </span>
            </div>
        </div>
    );
}

export default CheckoutItems;