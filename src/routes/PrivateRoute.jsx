// import { useEffect } from "react"
// import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"
// import { Signup } from "../redux/auth/auth.actions"

export default function PrivateRoute({children}){

    const token= JSON.parse(localStorage.getItem("token"))
    if(token){
        return children
    }

    return <LoginPage />
}