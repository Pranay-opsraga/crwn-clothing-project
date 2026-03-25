import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../contexts/product-context"
import ProductCard from "./product-card"

const CategoryPage = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(ProductContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category] || []);
    }, [category, categoriesMap]);

    return (
        <div className="mb-4 mt-10 text-center">
            <span className="text-3xl  font-bold">{category.toUpperCase()}</span>
            <div className="mt-2 grid grid-cols-4 gap-5 ml-2 mr-2 mb-4">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage;