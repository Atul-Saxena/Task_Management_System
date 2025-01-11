import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const hyperlinks = [
        { name: 'Home', href: '/' },
        { name: 'MyTasks', href: '/mytasks' },
    ]


    return (
        <nav className="bg-gray-800 text-white p-2 shadow-md mb-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-base font-bold">NewsApp</h1>
                <button
                    className="sm:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
                <ul
                    className={`sm:flex sm:items-center sm:space-x-4 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    {
                        hyperlinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.href} className="hover:underline">
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }

                    <Link
                        className="group relative inline-block overflow-hidden border outline-none border-white px-4 py-2 focus:outline-none focus:ring"
                        to="/createtask"
                    >
                        <span
                            className="absolute inset-y-0 right-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-black"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-white transition-colors group-hover:text-black"
                        >
                            Create Task
                        </span>
                    </Link>

                    <button
                        className="group relative inline-block overflow-hidden border outline-none border-white px-4 py-2 focus:outline-none focus:ring"
                        onClick={() => {
                            localStorage.removeItem("authenticated");
                            localStorage.removeItem("token");
                            localStorage.removeItem("userID");
                            window.location.reload();
                        }}
                    >
                        <span
                            className="absolute inset-y-0 right-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-black"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-white transition-colors group-hover:text-black"
                        >
                            Logout
                        </span>
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;