import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-950 text-white p-4 flex justify-between items-center">
            <h1 className="font-bold text-xl">Catherine Tomic</h1>
            <div className="space-x-8">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/workexperience">Work Experience</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;