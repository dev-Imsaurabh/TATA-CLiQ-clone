import axios from "axios";
import { USERS } from "../../constants/constants";

export async function signup_user(obj) {
    let flag =false
    try {
        let exist = await axios.get(USERS+"/"+obj.email)
        console.log(exist)
        if(exist.data.email!=undefined){
            flag=true
        }
        
    } catch (error) {
        let res = await axios.post(USERS,obj)
        return {exist:false,status:true}
       
    }
   

    if(flag){
        return {exist:true,status:false}
    }

    let res = await axios.post(USERS,obj)
    return {exist:false,status:true}

    
    
}


export async function login_user({email,password}) {
    let res = await axios.get(USERS)

    let user=res.data.filter((el)=>el.email==email&&el.password==password)
    return user.length>0?{userId:user[0],status:true,no_user:false}:{userId:null,status:false,no_user:true}   
}