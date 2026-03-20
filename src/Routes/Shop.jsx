import SHOP_DATA from "../shop-data";
import { ProductContext } from "../contexts/product";
import { useContext } from "react";
import ProductCard from "../Components/product-card";
const Shop = () => {
    const { Products } = useContext(ProductContext);
    return (
        <div className="mt-2 grid grid-cols-4 gap-5 ml-2 mr-2">
            {SHOP_DATA.map((product) => {
                return (
                    <ProductCard key={product.id} {...product} />
                )
            })}
        </div>
    )
}

export default Shop;