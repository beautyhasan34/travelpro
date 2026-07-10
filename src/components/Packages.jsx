import "./Packages.css";
import { Link } from "react-router-dom";

const packages = [
    {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
        title: "Dubai Tour",
        price: "$999",
    },
    {
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop",
        title: "Thailand Tour",
        price: "$799",
    },
    {
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
        title: "Malaysia Tour",
        price: "$899",
    },
];

function Packages() {
    return (
        <section className="packages" id="packages">
            <h2>Popular Packages</h2>

            <div className="package-container">
                {packages.map((item, index) => (
                    <div className="package-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="package-content">
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <Link to="/booking-success">
                                <button className="booking-btn">
                                    Confirm Booking
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Packages;