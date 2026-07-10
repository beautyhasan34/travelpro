import "./Booking.css";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        travelers: 1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/bookings",
                formData
            );

            if (res.data.success) {
                alert("✅ Booking Successful");
                navigate("/booking-success");
            }
        } catch (err) {
            console.log(err.response);
            console.log(err.response?.data);
            console.log(err.message);

            alert("❌ Booking Failed");
        }
    };
    return (
        <section className="booking">

            <div className="booking-container">

                <h1>Book Your Dream Tour</h1>

                <p>
                    Fill out the form below and our travel consultant will contact you shortly.
                </p>


                <form className="booking-form" onSubmit={handleSubmit}>

                    <div className="input-box">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-box">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-box">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+8801XXXXXXXXX"
                        />
                    </div>

                    <div className="input-box">
                        <label>Travel Date</label>
                        <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-box">
                        <label>Number of Travelers</label>
                        <input
                            type="number"
                            name="travelers"
                            min="1"
                            value={formData.travelers}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-box">
                        <label>Select Package</label>

                        <select
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                        >
                            <option value="">Select Package</option>
                            <option value="Cox's Bazar Tour">Cox's Bazar Tour</option>
                            <option value="Sajek Valley">Sajek Valley</option>
                            <option value="Bandarban Adventure">Bandarban Adventure</option>
                            <option value="Saint Martin">Saint Martin</option>
                            <option value="Sundarbans">Sundarbans</option>
                            <option value="Dubai Holiday">Dubai Holiday</option>
                        </select>

                    </div>


                       

                    <div className="input-box">
                        <label>Payment Method</label>

                        <select>
                            <option>Cash</option>
                            <option>bKash</option>
                            <option>Nagad</option>
                            <option>Rocket</option>
                            <option>Visa Card</option>
                            <option>Master Card</option>
                        </select>
                    </div>





                    <div className="input-box full">
                        <label>Special Request</label>

                        <textarea
                            rows="5"
                            placeholder="Write your special request..."
                        ></textarea>

                    </div>
                    <button type="submit" className="booking-btn">
                        Confirm Booking
                    </button>


                </form>

            </div >

        </section >
    );
}

export default Booking;