import "./Search.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";

function Search() {
    return (
        <section className="search">

            <div className="search-container">

                <div className="search-box">
                    <FaMapMarkerAlt className="icon" />

                    <select>
                        <option>Select Destination</option>
                        <option>Dubai</option>
                        <option>Thailand</option>
                        <option>Malaysia</option>
                        <option>Singapore</option>
                        <option>Maldives</option>
                    </select>
                </div>

                <div className="search-box">
                    <FaCalendarAlt className="icon" />

                    <input type="date" />
                </div>

                <div className="search-box">
                    <FaUsers className="icon" />

                    <select>
                        <option>Guests</option>
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4+ People</option>
                    </select>
                </div>

                <button>Search Tour</button>

            </div>

        </section>
    );
}

export default Search;