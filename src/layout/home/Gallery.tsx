import { useState, useEffect } from "react";
import { data } from "./ReviewDonar";
import "../../css/gallery.css";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000); // Change the interval duration as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
      {data.map((item, index) => (
        <div
          key={index}
          className={`p-4 ${
            index === currentImageIndex ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src={item.img}
            alt={`Img ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
