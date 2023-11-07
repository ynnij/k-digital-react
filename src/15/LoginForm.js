import ButtonBlue from "../common/ButtonBlue";
import { useState } from "react";

const LoginForm = ({setUser}) => {
    const [inUser, setInUser] = useState();
    const [inPw, setPw] = useState();

    const handleLogin = (e) => {
        e.preventDefault();

        if("admin" === inUser && "pwd" === inPw ) {
            localStorage.setItem("user",inUser);
            setUser(inUser);
        } else {
            alert("아이디 또는 비밀번호를 확인해주세요.")
        }

    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <div>
                        <label htmlFor="id" className="block mb-2 text-sm font-medium ">ID</label>
                        <input
                            onChange={(e)=>setInUser(e.target.value)}
                            type="text" name="id" id="id"
                            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5" placeholder="ID" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input onChange={(e)=>setPw(e.target.value)} type="password" name="password" id="password" placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                    </div>

                    <ButtonBlue caption={'Login'} handleClick={handleLogin} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm
