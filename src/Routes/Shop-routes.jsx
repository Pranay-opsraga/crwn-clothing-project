import { Routes, Route } from "react-router-dom"
import Shop from "./Shop"
import CategoryPage from "../Components/CategoryPage"

const ShopRoutes = () => {
    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path=":category" element={<CategoryPage />} />;
        </Routes>
    )
}

export default ShopRoutes;