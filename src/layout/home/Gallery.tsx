import { useState, useEffect } from "react";
import "../../css/gallery.css";

import donate1 from "../../../public/donate/donate1.jpg";
import donate2 from "../../../public/donate/donate2.jpg";
import donate3 from "../../../public/donate/donate3.jpg";
import donate4 from "../../../public/donate/donate4.jpg";
import donate5 from "../../../public/donate/donate5.jpg";
import donate6 from "../../../public/donate/img.2.jpg";

const gallery = [donate1, donate2, donate3, donate4, donate5, donate6];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 2000); // Change the interval duration as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mt-6 text-center">Our gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6">
        {gallery.map((item, index) => (
          <div
            key={index}
            className={`p-4 ${
              index === currentImageIndex ? "fade-in" : "fade-out"
            }`}
          >
            <img
              src={item}
              alt={`Img ${index + 1}`}
              className=" h-64 rounded-md w-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
