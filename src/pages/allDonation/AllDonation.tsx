import { useGetDonationQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

type TDonation = {
  title: string;
  image: string;
  category: string;
  amount: number;
  description: string;
  _id: string;
};

const AllDonation = () => {
  const { data, isLoading, error } = useGetDonationQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;
  if (!data) return null;
  console.log(data, "find my data");

  return (
    <div>
      <div className="my-4 grid grid-cols-3 gap-10 mx-16">
        {data.donations.map((item: TDonation) => (
          <div
            key={item._id}
            className="card card-compact bg-cyan-600 shadow-xl rounded-md"
          >
            <figure>
              <img
                className="p-3 card-body h-64 rounded-md"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="card-body p-4 text-white">
              <h1 className="card-title font-bold ">{item.category}</h1>
              <p className="text-xl">{item.title}</p>
              <p className="text-xl">{item.amount}$</p>
              <div className="card-actions justify-end">
                <Link to={`/donations/${item._id}`}>
                  <button className="btn bg-cyan-300 p-2 rounded-md text-xl">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDonation;
