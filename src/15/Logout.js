import ButtonBlue from "../common/ButtonBlue";

const Logout = ({user, setUser}) => {
    const handleLogout = ()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("pwd");
        setUser(null);
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        {user}님 반갑습니다.
                    </h1>
                        <ButtonBlue caption={'Logout'} handleClick={handleLogout} />
                </div>
            </div>

        </div>
    )
}

export default Logout
