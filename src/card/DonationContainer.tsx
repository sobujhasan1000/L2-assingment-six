import { Link } from "react-router-dom";
import DonationCard from "./DonationCard";
const DonationContainer = () => {
  return (
    <div className="">
      <div className="text-center text-3xl my-4">
        <h1 className="font-bold text-4xl py-6">Categories</h1>
        <DonationCard />
        <Link to="donations">
          <button className="bg-cyan-400 p-2 rounded-md">view all</button>
        </Link>
      </div>
    </div>
  );
};

export default DonationContainer;
