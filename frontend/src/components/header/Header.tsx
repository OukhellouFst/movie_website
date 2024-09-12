import React from "react";
import './Header.css'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header : React.FC = () => {
    const location = useLocation();

    return (

            <header>
                <div className="header__logo">Movies</div>
                <nav className="header__navigation">
                    <Link to="/" className={location.pathname === '/' ? 'header__nav-active' : ''}>Home</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'header__nav-active' : ''}>About</Link>
                </nav>
                <div className="header__user-menu">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png" alt="User Avatar"/>
                    <button>Logout</button>
                </div>
            </header>
    )
}

export default Header