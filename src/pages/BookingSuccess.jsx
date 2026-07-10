import { Link } from "react-router-dom";
import "./BookingSuccess.css";

function BookingSuccess() {
    return (
        <section className="success">

            <div className="success-card">

                <div className="check-circle">
                    ✓
                </div>

                <h1>Booking Confirmed!</h1>

                <p>
                    Thank you for choosing <strong>TravelPro</strong>.
                    <br />
                    Your booking request has been received successfully.
                </p>

                <div className="booking-info">

                    <div className="info">
                        <h3>Booking ID</h3>
                        <span>#TP2026001</span>
                    </div>

                    <div className="info">
                        <h3>Status</h3>
                        <span className="confirmed">
                            Confirmed
                        </span>
                    </div>

                    <div className="info">
                        <h3>Payment</h3>
                        <span>Pending</span>
                    </div>

                </div>

                <p className="note">
                    📞 Our travel consultant will contact you within 24 hours to complete
                    your booking and payment process.
                </p>

                <div className="btn-group">

                    <Link to="/">
                        <button className="home-btn">
                            Back to Home
                        </button>
                    </Link>

                    <Link to="/packages">
                        <button className="package-btn">
                            Explore More Tours
                        </button>
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default BookingSuccess;