import Banner from "./Banner";
import DonationContainer from "../../card/DonationContainer";
import ReviewDonar from "./ReviewDonar";
import Gallary from "./Gallery";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="mx-4">
      <Banner />
      <DonationContainer />
      <ReviewDonar />
      <Gallary />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
