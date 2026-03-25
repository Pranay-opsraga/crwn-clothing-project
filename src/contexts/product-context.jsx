import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
        const fetchProducts = async () => {
            const categoriesMap = await getCollectionAndDocuments('categories');

            setCategoriesMap(categoriesMap);
        };
        fetchProducts();
    }, [])

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider };