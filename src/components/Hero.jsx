import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Hero() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="heroSwiper"
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <section
                    className="hero"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
                    }}
                >
                    <div className="overlay"></div>

                    <div className="hero-content">
                        <h1>Explore The World</h1>

                        <p>
                            Discover amazing places with our premium travel packages.
                        </p>

                        <button>Book Your Tour</button>
                    </div>
                </section>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <section
                    className="hero"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600')",
                    }}
                >
                    <div className="overlay"></div>

                    <div className="hero-content">
                        <h1>Adventure Awaits</h1>

                        <p>
                            Create unforgettable memories around the world.
                        </p>

                        <button>Explore Now</button>
                    </div>
                </section>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
                <section
                    className="hero"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600')",
                    }}
                >
                    <div className="overlay"></div>

                    <div className="hero-content">
                        <h1>Your Dream Vacation</h1>

                        <p>
                            Best hotels, flights and holiday packages in one place.
                        </p>

                        <button>Get Started</button>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    );
}

export default Hero;