import { Route, Routes } from "react-router-dom";

import CheckoutPage from "../pages/CheckoutPage";

import CartPage from "../pages/CartPage";

import Homepage from "../pages/Homepage";
import ProductsPage from "../pages/ProductsPage";
import ViewProductPage from "../pages/ViewProductPage";
import { OtpModal } from "../components/OtpModal";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import Error404 from "../pages/Error404";

import ProfilePage from "../pages/ProfilePage";
import AdminPanel from "../pages/AdminPanel";
import SearchPage from "../pages/SearchPage";
import ProtectAdmin from "../contexts/ProtectAdmin";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/products/:id" element={<ProductsPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="*" element={<Error404 />}></Route>
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/:id/:pid" element={<ViewProductPage />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      ></Route>

      {/* profile */}
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute><ProtectAdmin><AdminPanel /></ProtectAdmin></PrivateRoute>} />
      <Route path="/search" element={<SearchPage />} />


    </Routes>
  );
}
