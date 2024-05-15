import { useParams } from "react-router-dom";
import { useGetDonationQuery } from "../redux/api/api";

type TDonation = {
  title: string;
  image: string;
  category: string;
  amount: number;
  _id: string;
};

const DonationDetail = () => {
  const { _id } = useParams<{ _id: string }>();
  const { data, isLoading, error } = useGetDonationQuery({});
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;
  if (!data) return null;

  const selectedDonation = data?.donations.find(
    (item: TDonation) => item._id == _id
  );

  if (!selectedDonation) return <div>Donation not found</div>;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-slate-300 p-4 rounded-md w-1/3">
          <h2 className="text-2xl font-bold text-center">
            {selectedDonation.title}
          </h2>
          <img
            src={selectedDonation.image}
            alt={selectedDonation.title}
            className="my-4 w-full rounded-md"
          />
          <p className="font-bold text-xl text-center">
            {selectedDonation.description}$
          </p>
          <p>Category: {selectedDonation.category}</p>
          <p>Amount: {selectedDonation.amount}$</p>

          <div className="flex justify-between">
            <button className="btn btn-info">Donation now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
