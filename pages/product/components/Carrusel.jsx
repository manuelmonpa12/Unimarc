export default function Carrusel() {
  return (
    <div className="content-products mb-3">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/un6yvtd6uq5z/3sAqKwVr8ZZ9ZfUcFrJHi0/29c1088df430b2ff6a152250140f905c/RDA_Banner-Home_Landing_Desktop_06.12-min.webp"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
