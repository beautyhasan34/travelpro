import "./Gallery.css";

const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd",
];

function Gallery() {
    return (
        <section className="gallery">
            <div className="gallery-title">
                <h2>Travel Gallery</h2>
                <p>Explore beautiful destinations around the world.</p>
            </div>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div className="gallery-card" key={index}>
                        <img src={img} alt={`Travel ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;