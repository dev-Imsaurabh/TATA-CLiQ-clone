import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"
import { Signup } from "../redux/auth/auth.actions"

export default function PrivateRoute({children}){

    const {auth} = useSelector((state)=>state.authManager)
    if(auth){
        return children
    }

    return <LoginPage />
}