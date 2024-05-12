// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import donateBG from "../../../public/donate/donarBg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// eslint-disable-next-line react-refresh/only-export-components
export const AllDonation = [
  {
    image:
      "https://vakilsearch.com/blog/wp-content/uploads/2022/06/how-many-one-person-company-can-be-created-by-an-individual.png",
    catagorie: "food and nutrition",
    title: "Support for Hunger Relief",
    amount: 750,
    description:
      "Help alleviate hunger and provide nutritious food to those in need.",
  },
  {
    image:
      "https://st2.depositphotos.com/3143277/8644/i/450/depositphotos_86446164-stock-photo-business-man-in-office.jpg",
    catagorie: "education",
    title: "Support Education",
    amount: 200,
    description: "Help children get access to quality education.",
  },
  {
    image:
      "https://www.shutterstock.com/shutterstock/photos/2122700972/display_1500/stock-photo-image-of-young-asian-woman-company-worker-in-glasses-smiling-and-holding-digital-tablet-standing-2122700972.jpg",
    catagorie: "medical",
    title: "Medical Assistance",
    amount: 1000,
    description: "Fund medical treatments for those in need.",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/strict-female-teacher-glasses-points-her-index-finger-camera-warning-you-importance-reading-books-middle-aged-270294560.jpg",
    catagorie: "environment",
    title: "Protect the Environment",
    amount: 300,
    description: "Support initiatives to preserve our planet.",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/friendly-attractive-caucasian-bearded-business-260nw-2206394649.jpg",
    catagorie: "animal welfare",
    title: "Animal Shelter Support",
    amount: 400,
    description: "Help provide care for animals in shelters.",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/young-male-employee-working-office-260nw-2239089029.jpg",
    catagorie: "community",
    title: "Community Development",
    amount: 600,
    description: "Invest in projects that benefit local communities.",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/old-male-employee-working-office-260nw-2410583347.jpg",
    catagorie: "disaster relief",
    title: "Disaster Relief Fund",
    amount: 800,
    description:
      "Assist victims of natural disasters with essential resources.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:832/1*GONEhoJPJwk7-jY8-lMFYQ.png",
    catagorie: "arts and culture",
    title: "Promote Arts and Culture",
    amount: 250,
    description: "Support programs that celebrate arts and cultural diversity.",
  },
  // Add more objects as needed
];

const ReviewDonar = () => {
  return (
    <div className="p-6" style={{ backgroundImage: `url(${donateBG})` }}>
      <h1 className="text-center font-bold text-3xl p-4">Feedback</h1>
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
        {AllDonation.map((stories) => (
          <SwiperSlide key={stories.title} className="pb-12">
            <div className="text-center flex flex-col items-center">
              <img
                src={stories.image}
                alt=""
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="capitalize text-xl md:text-2xl font-bold py-4">
                {stories.title}
              </h2>
              <p className="text-lg pt-4">
                {stories.description.slice(0, 100)}...
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewDonar;
