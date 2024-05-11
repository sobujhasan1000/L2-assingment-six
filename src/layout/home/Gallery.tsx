import { useState, useEffect } from "react";
import { AllDonation } from "./ReviewDonar";
import "../../css/gallery.css";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % AllDonation.length);
    }, 2000); // Change the interval duration as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-6">
      {AllDonation.slice(1, 6).map((item, index) => (
        <div
          key={index}
          className={`p-4 ${
            index === currentImageIndex ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src={item.image}
            alt={`Img ${index + 1}`}
            className="w-full h-64 rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
