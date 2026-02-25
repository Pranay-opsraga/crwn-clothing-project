import categories from "./Categories-array"


const Categories = () => {
    return (
        <div className="w-full grid grid-cols-6 gap-5 p-2 ">
            {categories.map(({ id, title, imageUrl }) => (
                <div
                    key={id}
                    className={`h-80 relative flex items-center justify-center border border-black border-2 overflow-hidden
            ${id <= 3 ? 'col-span-2' : 'col-span-3'}`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out hover:scale-110"
                        style={{ backgroundImage: `url(${imageUrl})` }}>
                    </div>
                    <div className=" px-6 py-4 border border-gray-400 border-2 bg-white text-center cursor-pointer hover:opacity-90 opacity-70">
                        <h2 className="text-xl font-bold text-gray-600 mb-1">{title}</h2>
                        <p className="text-base font-light text-gray-500">Shop Now</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories;