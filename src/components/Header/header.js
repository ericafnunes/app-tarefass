import React from "react";
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";





function Header() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <IoArrowBackCircleOutline size={60} color="white" />
                </Link>
            </div>
        </header>
    )
}

export default Header;
