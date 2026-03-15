
const ProductCard = ({ name, price, imageUrl }) => {
    return (
        <div className="product-card-container w-full overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden">
                <img className="w-full h-80 object-cover group-hover:opacity-80" src={imageUrl} alt={name} />
                <button className="absolute bottom-0 left-0 w-4/5 mx-[10%] py-3 bg-white text-black font-medium uppercase opacity-0 translate-y-full group-hover:opacity-85 group-hover:translate-y-[-10%] transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                    Add to Cart
                </button>
            </div>
            <div className="flex justify-between mt-2">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ProductCard;