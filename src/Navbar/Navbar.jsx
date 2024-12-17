import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="w-full justify-items-center text-3xl" >
            < ul className="
    text-center flex mt-4 font-medium flex-row space-x-8 lg:mt-0
     bg-red-400 p-2 rounded-t-lg bold">
                <li> <Link to='/' className="border-r-2 pr-5 pl-5">Home</Link>
                </li >
                <li><Link to='/about'>
                    About
                </Link>
                </li>
                <li className="flex">
                    <button className="size-2 mr-4 mt-1.5 font-bold pr-4"><FaSearch /></button>
                    <input className="ml-3 p-1 rounded-md pr-5" type="text" placeholder="search... " />
                </li>
            </ul >

        </div >
    );
};


export default Navbar;