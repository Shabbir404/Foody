import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="bg-red-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="hover:text-white hover:bg-red-600 px-3 py-2 rounded">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-white hover:bg-red-600 px-3 py-2 rounded">
                            About
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:border-red-500"
                    />
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-md">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;