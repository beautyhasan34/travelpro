import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Company */}
                <div className="footer-box">

                    <h2>TravelPro</h2>

                    <p>
                        Explore the world with confidence. We provide affordable
                        tour packages, visa services, hotel booking and flight booking.
                    </p>

                    <div className="social-icons">

                        <a href="https://www.facebook.com/shomrathasan.shawon"><FaFacebookF /></a>

                        <a href="#"><FaInstagram /></a>

                        <a href="https://www.linkedin.com/in/shimran-hasan-697161409?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedinIn /></a>

                        <a href="#"><FaYoutube /></a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-box">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/packages">Packages</Link>



                    <Link to="/contact">Contact</Link>
                    <Link to="/gallery">Gallery</Link>

                </div>

                {/* Contact */}

                <div className="footer-box">

                    <h3>Contact</h3>

                    <p><FaMapMarkerAlt /> Moulvibazar, Bangladesh</p>

                    <p><FaPhoneAlt /> +880 1712-345678</p>

                    <p><FaEnvelope /> info@travelpro.com</p>

                    <p><FaClock /> Sat - Thu : 9:00 AM - 8:00 PM</p>

                </div>

                {/* Newsletter */}

                <div className="footer-box">

                    <h3>Newsletter</h3>

                    <p>Subscribe to get our latest offers.</p>

                    <form>

                        <input
                            type="email"
                            placeholder="beautyhasan34@gmail.com"
                        />

                        <Link to="/subscribe">
                            Subscribe
                        </Link>

                    </form>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 TravelPro. All Rights Reserved.
                </p>

                <div className="footer-policy">

                    <a href="#">Privacy Policy</a>

                    <a href="#">Terms & Conditions</a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;