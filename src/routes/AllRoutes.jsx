import { Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import Homepage from "../pages/Homepage";
import ProductsPage from "../pages/ProductsPage";
import ViewProductPage from "../pages/ViewProductPage";

export default function AllRoutes(){

    return <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/:id/:pid" element={<ViewProductPage />}></Route>



    </Routes>
}