import { Route, Routes } from "react-router-dom";

import CheckoutPage from "../pages/CheckoutPage";

import CartPage from "../pages/CartPage";

import Homepage from "../pages/Homepage";
import ProductsPage from "../pages/ProductsPage";
import ViewProductPage from "../pages/ViewProductPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import Error404 from "../pages/Error404";
import SearchPage from "../pages/SearchPage";

export default function AllRoutes(){

    return <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>}></Route>
        <Route path="/:id/:pid" element={<ViewProductPage />}></Route>
        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>}></Route>



    </Routes>
}