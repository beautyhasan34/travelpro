import "./MessageSuccess.css";
import { Link } from "react-router-dom";

function MessageSuccess() {
    return (
        <section className="success">

            <div className="success-box">

                <div className="check">✓</div>

                <h1>Message Sent Successfully!</h1>

                <p>
                    Thank you for contacting <strong>TravelPro</strong>.
                </p>

                <p>
                    We have received your message and our support team
                    will get back to you as soon as possible.
                </p>

                <Link to="/">
                    <button>Back to Home</button>
                </Link>

            </div>

        </section>
    );
}

export default MessageSuccess;