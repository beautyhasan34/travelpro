import "./SubscribeSuccess.css";
import { Link } from "react-router-dom";

function SubscribeSuccess() {
    return (
        <section className="success">

            <div className="success-box">

                <div className="icon">✓</div>

                <h1>Subscription Successful!</h1>

                <p>
                    Thank you for subscribing to the <strong>TravelPro</strong> newsletter.
                </p>

                <p>
                    You'll receive our latest travel deals, discounts, and exciting tour
                    packages directly in your inbox.
                </p>

                <Link to="/">
                    <button>Back to Home</button>
                </Link>

            </div>

        </section>
    );
}

export default SubscribeSuccess;