import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <Navbar />

            <section className="page">
                <div>
                    <h1>Contact Us</h1>
                    <p>
                        We'd love to hear from you! Fill out the form below and our team
                        will respond as soon as possible.
                    </p>

                    <form className="contact-form">

                        <input type="text" placeholder="Your Name" />

                        <input type="email" placeholder="Your Email" />

                        <input type="text" placeholder="Subject" />

                        <textarea placeholder="Your Message"></textarea>

                        <Link to="/message-success">
                            <button type="button">
                                Send Message
                            </button>
                        </Link>

                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;