import { useState,useEffect } from "react";
import LoginForm from "./LoginForm"
import Logout from "./Logout"

const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setUser(localStorage.getItem("user"));
    },[])

    return (
        <div>
            { user
            ? <Logout user={user} setUser={setUser}/>
            : <LoginForm setUser={setUser} />
            }
        </div>
    )
}

export default Login
