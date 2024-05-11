import DonationCard from "./DonationCard";
const DonationContainer = () => {
  return (
    <div className="">
      <div className="text-center text-3xl my-4">
        <h1 className="">Donate your Humanate</h1>
        <DonationCard />
        <button className="bg-green-400 p-2 rounded-md">view all post</button>
      </div>
    </div>
  );
};

export default DonationContainer;
