// eslint-disable-next-line react-refresh/only-export-components

import { useGetDonationQuery } from "../redux/api/api";

type TDonation = {
  title: string;
  image: string;
  category: string;
  amount: number;
};

const DonationCard = () => {
  const { data, isLoading, error } = useGetDonationQuery({});
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
                <button className="btn bg-green-200 p-2 rounded-md text-xl">
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCard;
