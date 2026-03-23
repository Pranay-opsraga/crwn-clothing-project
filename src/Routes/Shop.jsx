import { useContext, Fragment } from "react";
import { ProductContext } from "../contexts/product-context";
import ProductPreview from "../Components/Products-preview";

const Shop = () => {
    const { categoriesMap } = useContext(ProductContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <ProductPreview title={title} products={categoriesMap[title]} />

                </Fragment>
            ))}
        </Fragment>
    );
};

export default Shop;