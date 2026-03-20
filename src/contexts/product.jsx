import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocument } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [Products, setProducts] = useState([]);
    const value = { Products };

    // useEffect(() => {
    //     const uploadData = async () => {
    //         try {
    //             await addCollectionAndDocument('categories', SHOP_DATA);
    //             console.log('Categories uploaded successfully!');
    //         } catch (error) {
    //             console.error('Error uploading categories:', error);
    //         }
    //     };
    //     uploadData();
    // }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider };