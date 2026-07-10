import "./Packages.css";
import { Link } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaStar,
    FaUsers,
    FaClock,
    FaPlane,
    FaHotel,
    FaUtensils,
    FaHeart,
} from "react-icons/fa";

const packages = [
    {
        title: "Cox's Bazar Tour",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        location: "Cox's Bazar, Bangladesh",
        days: "3 Days / 2 Nights",
        people: "4 Person",
        rating: "4.9",
        price: "$199",
    },
    {
        title: "Sajek Valley",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        location: "Rangamati",
        days: "2 Days / 1 Night",
        people: "5 Person",
        rating: "4.8",
        price: "$149",
    },
    {
        title: "Dubai Holiday",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        location: "Dubai, UAE",
        days: "5 Days / 4 Nights",
        people: "6 Person",
        rating: "5.0",
        price: "$799",
    },
];

function Packages() {
    return (
        <section className="packages-page">

            <div className="packages-heading">
                <h1>Our Tour Packages</h1>
                <p>Choose your dream destination and enjoy unforgettable memories.</p>
            </div>

            <div className="packages-grid">

                {packages.map((item, index) => (

                    <div className="package-card" key={index}>

                        <div className="image-box">

                            <img src={item.image} alt={item.title} />

                            <span className="badge">Popular</span>

                            <button className="wish">
                                <FaHeart />
                            </button>

                        </div>

                        <div className="package-content">

                            <div className="rating">
                                <FaStar />
                                {item.rating}
                            </div>

                            <h2>{item.title}</h2>

                            <p className="location">
                                <FaMapMarkerAlt /> {item.location}
                            </p>

                            <div className="info">

                                <span>
                                    <FaClock /> {item.days}
                                </span>

                                <span>
                                    <FaUsers /> {item.people}
                                </span>

                            </div>

                            <div className="features">

                                <span><FaPlane /> Flight</span>

                                <span><FaHotel /> Hotel</span>

                                <span><FaUtensils /> Breakfast</span>

                            </div>

                            <div className="bottom">

                                <div>
                                    <small>Starting From</small>

                                    <h3>{item.price}</h3>
                                </div>

                                <div className="buttons">

                                    <Link to="/package-details">
                                        <button className="details">Details</button>
                                    </Link>


                                    <button className="book">
                                        Book Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Packages;