import "./Services.css";
import {
    FaPlane,
    FaHotel,
    FaPassport,
    FaGlobeAsia,
    FaCar,
    FaHeadset,
} from "react-icons/fa";

function Services() {
    const services = [
        {
            icon: <FaPlane />,
            title: "Flight Booking",
            text: "Book domestic and international flights at the best prices.",
        },
        {
            icon: <FaHotel />,
            title: "Hotel Booking",
            text: "Find comfortable hotels with affordable packages.",
        },
        {
            icon: <FaPassport />,
            title: "Visa Processing",
            text: "Fast and reliable visa assistance for multiple countries.",
        },
        {
            icon: <FaGlobeAsia />,
            title: "World Tour",
            text: "Discover amazing destinations around the world.",
        },
        {
            icon: <FaCar />,
            title: "Airport Pickup",
            text: "Safe and comfortable airport transfer services.",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            text: "Our support team is always ready to help you.",
        },
    ];

    return (
        <section className="services" id="services">
            <h2>Our Services</h2>

            <div className="service-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;