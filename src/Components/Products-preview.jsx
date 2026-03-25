import ProductCard from "./product-card";
import { Link } from "react-router-dom";

const productPreview = ({ title, products }) => {
    return (
        <div className="mb-4 mt-10">
            <Link to={title} className="text-3xl font-bold ">{title.toUpperCase()}</Link>
            <div className="mt-2 grid grid-cols-4 gap-5 ml-2 mr-2 mb-4">
                {products.filter((_, idx) => idx < 4).map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default productPreview;