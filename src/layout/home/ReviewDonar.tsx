// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import donateBG from "../../../public/donate/donarBg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// eslint-disable-next-line react-refresh/only-export-components
export const data = [
  {
    name: "shoes",
    details: "shoes details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "shirt",
    details: "shirt details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "hat",
    details: "hat details",
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
];

const ReviewDonar = () => {
  return (
    <div className="p-6" style={{ backgroundImage: `url(${donateBG})` }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={false}
        pagination={true}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // When window width is >= 768px (desktop)
          768: {
            slidesPerView: 2,
          },
          // When window width is < 768px (mobile)
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.map((stories) => (
          <SwiperSlide key={stories.name} className="pb-12">
            <div className="text-center flex flex-col items-center">
              <img
                src={stories.img}
                alt=""
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="capitalize text-xl md:text-2xl font-bold py-4">
                {stories.name}
              </h2>
              <p className="text-lg pt-4">{stories.details.slice(0, 100)}...</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewDonar;
