import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaPlane, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">

            <Link to="/" className="logo">
                <FaPlane />
                <span>TravelPro</span>
            </Link>

            <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </NavLink>

                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                    About
                </NavLink>

                <NavLink to="/packages" onClick={() => setMenuOpen(false)}>
                    Packages
                </NavLink>

                <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                    Gallery
                </NavLink>

                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </NavLink>
            </nav>

            <button className="book-btn">Book Now</button>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

        </header>
    );
}

export default Navbar;