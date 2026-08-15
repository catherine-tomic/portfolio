import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white p-4 text-center mt-12">
            &copy; { new Date().getFullYear() } Catherine Tomic
        </footer>
    );
}

export default Footer;