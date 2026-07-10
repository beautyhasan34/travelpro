import "./PackageDetails.css";
import { Link } from "react-router-dom";
function PackageDetails() {
    return (
        <div className="details-page">
            <h1>Cox's Bazar Tour</h1>

            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Cox's Bazar"
            />

            <h3>Package Includes</h3>

            <ul>
                <li>🏨 2 Nights Hotel Stay</li>
                <li>🍽️ Daily Breakfast</li>
                <li>🚗 Local Transportation</li>
                <li>🧑‍💼 Professional Tour Guide</li>
                <li>📸 Sightseeing</li>
            </ul>

            <h2>Price: $199 / Person</h2>

            <Link to="/booking">
                <button>Book Now</button>
            </Link>
        </div>
    );
}

export default PackageDetails;