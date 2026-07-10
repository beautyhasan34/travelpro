import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import Subscribe from "./pages/Subscribe";
import SubscribeSuccess from "./pages/SubscribeSuccess";
import MessageSuccess from "./pages/MessageSuccess";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/subscribe" element={<Subscribe />} />

        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/subscribe-success" element={<SubscribeSuccess />} />
        <Route path="/message-success" element={<MessageSuccess />} />
        <Route path="/admin" element={<Admin />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;