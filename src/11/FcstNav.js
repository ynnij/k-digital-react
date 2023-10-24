import { Link } from "react-router-dom"
import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const FcstNav = () => {
  return (
    <nav className="mx-8 my-3 justify-between items-center">
        <div className="flex items-center">
            <BsFillSunFill className="text-2xl mr-2 text-orange-600" />
            <h2 className="text-2xl font-bold">기상청 예보</h2>
        </div>
        
        <ul>
            <li className="mr-4"><Link to='/'><AiFillHome className="text-2xl text-blue-500	transition-all	
hover:scale-125  hover:text-blue-700"/></Link></li>
        </ul>
    </nav>
  )
}

export default FcstNav
