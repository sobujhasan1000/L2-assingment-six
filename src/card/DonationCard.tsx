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
        {data.donations.map((item: TDonation) => (
          <div
            key={item.title}
            className="card card-compact bg-lime-50 shadow-xl rounded-md"
          >
            <figure>
              <img
                className="p-3 card-body rounded-md"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">{item.image}</h2>
              <p className="text-xl">catagori: {item.category}</p>
              <p className="text-xl">{item.amount}$</p>
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
