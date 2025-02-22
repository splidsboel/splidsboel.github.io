import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    return (
        
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className="text-xl font-bold">My App</div>
        <ul className="flex space-x-4">
            <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
            <li>
                <Link to="/songs" className="hover:text-gray-300">Songs</Link>
            </li>

        </ul>
        </nav>
    );
};

export default Navbar;