import DonationCard from "./DonationCard";
const DonationContainer = () => {
  return (
    <div className="">
      <div className="text-center text-3xl my-4">
        <h1 className="font-bold text-4xl py-6">Categories</h1>
        <DonationCard />
        <button className="bg-green-300 p-2 rounded-md">view all</button>
      </div>
    </div>
  );
};

export default DonationContainer;
