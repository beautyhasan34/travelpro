import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Search />
            <Services />
            <Packages />
            <Footer />
        </>
    );
}