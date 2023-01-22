import { Route, Routes } from "react-router-dom";

import CheckoutPage from "../pages/CheckoutPage";

import CartPage from "../pages/CartPage";

import Homepage from "../pages/Homepage";
import ProductsPage from "../pages/ProductsPage";
import ViewProductPage from "../pages/ViewProductPage";
import { OtpModal } from "../components/OtpModal";


export default function AllRoutes(){

    return <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/otpmodal" element={<OtpModal />}></Route>
        <Route path="/:id/:pid" element={<ViewProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>



    </Routes>
}