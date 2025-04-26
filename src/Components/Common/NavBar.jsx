"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log("hey")
    }

    const linkClasses = ({ isActive }) =>
        `transition-colors ${isActive ? "text-teal-400 font-bold" : "text-white hover:text-gray-300"
        }`

    const contactButtonClasses = ({ isActive }) =>
        `px-4 py-2 rounded transition-colors ${isActive
            ? "bg-teal-600 font-bold"
            : "bg-teal-700 hover:bg-teal-800 text-white"
        }`

    return (
        <nav className="bg-transparent py-4 px-6 md:px-12 absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white">
                        <h1 className="text-2xl font-bold">DIGITAL WISDOM</h1>
                        <p className="text-xs tracking-widest">P R I V A T E &nbsp; L I M I T E D</p>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden relative text-white focus:outline-none  z-20"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/" className={linkClasses}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={linkClasses}>
                            About Us
                        </NavLink>
                        <NavLink to="/design" className={linkClasses}>
                            We-Design
                        </NavLink>
                        <NavLink to="/contact" className={contactButtonClasses}>
                            Contact Us
                        </NavLink>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-teal-800 bg-opacity-90 rounded-lg p-4 animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            <NavLink to="/" className={linkClasses}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={linkClasses}>
                                About Us
                            </NavLink>
                            <NavLink to="/design" className={linkClasses}>
                                We-Design
                            </NavLink>
                            <NavLink to="/contact" className={contactButtonClasses}>
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
