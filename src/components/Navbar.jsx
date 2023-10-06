import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        <nav class='navber'>
        <div className="logo"><h1>Amr store</h1></div>
        <ul className="menu">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="products">Products</Link></li>
        </ul>
        </nav>
        {/* 2 */}
        </>
    );
}

export default Navbar;
