// eslint-disable-next-line react-refresh/only-export-components

import { useGetDonationQuery } from "../redux/api/api";
import { useState } from "react";

type TDonation = {
  title: string;
  image: string;
  category: string;
  amount: number;
  _id: string;
  description: string;
};

const DonationCard = () => {
  const { data, isLoading, error } = useGetDonationQuery({});
  const [selectedDonation, setSelectedDonation] = useState<TDonation | null>(
    null
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;
  // if (!data) return null;
  console.log(data, "find my data");
  return (
    <div>
      <div className="my-4 grid grid-cols-3 gap-10 mx-16">
        {data.donations.slice(0, 6).map((item: TDonation) => (
          <div
            key={item.title}
            className="card card-compact bg-cyan-600 shadow-xl rounded-md"
          >
            <figure>
              <img
                className="p-3 card-body h-64"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="card-body p-4 text-white">
              <h1 className="card-title font-bold">{item.category}</h1>
              <p className="text-xl">{item.title}</p>
              <p className="text-xl">Donate {item.amount}$</p>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-cyan-300 p-2 rounded-md"
                  onClick={() => setSelectedDonation(item)}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedDonation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-300 p-4 rounded-md w-1/3 text-xl">
            <h2 className="text-2xl font-bold text-center">
              {selectedDonation.title}
            </h2>
            <img
              src={selectedDonation.image}
              alt={selectedDonation.title}
              className="my-4 w-full rounded-md"
            />
            <p className="text-center font-bold">
              {selectedDonation.description}
            </p>
            <p>Category: {selectedDonation.category}</p>
            <p>Amount: {selectedDonation.amount}$</p>

            <div className="flex justify-between">
              <button
                className="btn bg-red-500 text-white p-2 rounded-md"
                onClick={() => setSelectedDonation(null)}
              >
                Close
              </button>
              <button className="btn btn-info">Donation now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationCard;
