import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
    const [bookings, setBookings] = useState([]);

    const loadBookings = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/bookings");
            setBookings(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadBookings();
    }, []);

    const deleteBooking = async (id) => {
        if (!window.confirm("Delete this booking?")) return;

        await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        loadBookings();
    };

    const changeStatus = async (id, status) => {
        await axios.patch(`http://localhost:5000/api/bookings/${id}`, {
            status,
        });

        loadBookings();
    };

    return (
        <div className="admin">

            <h1>TravelPro Admin Panel</h1>

            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Travel Date</th>
                        <th>Travelers</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {bookings.map((booking) => (

                        <tr key={booking._id}>

                            <td>{booking.name}</td>

                            <td>{booking.destination}</td>

                            <td>{booking.travelDate}</td>

                            <td>{booking.travelers}</td>

                            <td>

                                <select
                                    value={booking.status}
                                    onChange={(e) =>
                                        changeStatus(booking._id, e.target.value)
                                    }
                                >

                                    <option>Pending</option>
                                    <option>Approved</option>
                                    <option>Cancelled</option>

                                </select>

                            </td>

                            <td>

                                <button
                                    onClick={() => deleteBooking(booking._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Admin;