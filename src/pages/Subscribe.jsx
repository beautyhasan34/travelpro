import "./Subscribe.css";
import { Link } from "react-router-dom";

function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe-box">

                <h1>Subscribe to Our Newsletter</h1>

                <p>
                    Stay updated with our latest tour packages and exclusive travel offers.
                </p>

                <form className="subscribe-form">

                    <input
                        type="text"
                        placeholder="Your Full Name"
                    />

                    <input
                        type="email"
                        placeholder="beautyhasan34@gmail.com"
                    />

                    <Link to="/subscribe-success">
                        <button type="button">
                            Subscribe Now
                        </button>
                    </Link>

                </form>

            </div>
        </section>
    );
}

export default Subscribe;