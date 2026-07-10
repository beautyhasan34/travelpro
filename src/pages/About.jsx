import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About() {
    return (
        <>
            <Navbar />

            <section className="page">
                <h1>About TravelPro</h1>

                <p>
                    TravelPro is a professional travel agency offering tour packages,
                    hotel booking, flight booking, visa processing, and travel
                    consultation.
                </p>

                <h2>Why Choose Us?</h2>

                <ul>
                    <li>✔ Best Tour Packages</li>
                    <li>✔ Affordable Prices</li>
                    <li>✔ 24/7 Customer Support</li>
                    <li>✔ Trusted Travel Partner</li>
                </ul>
            </section>

            <Footer />
        </>
    );
}

export default About;