"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link href="/" className="logo">
                    Watch
                </Link>
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
                </button>
                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link href="/" className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#products">Products</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
