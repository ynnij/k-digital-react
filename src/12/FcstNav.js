import { Link } from "react-router-dom"
import { BsClouds } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";



const FcstNav = () => {
  return (
    <nav className="mx-8 my-3 justify-between items-center">
        <div className="flex items-center">
            <BsClouds className="text-2xl mr-2 text-blue-300
                                        animate-bounce "/>
            <h2 className="text-2xl font-bold">기상청 예보</h2>
            <BsClouds className="text-2xl ml-2 text-blue-300
                                        animate-[bounce_1s_infinite_200ms]"/>
        </div>
        <ul>
            <li className="mr-4">
                <Link to='/'>
                    <AiFillHome className="text-2xl text-blue-300 transition-all
                                                hover:scale-125  hover:text-blue-500"/>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default FcstNav
