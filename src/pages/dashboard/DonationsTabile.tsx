import { Link } from "react-router-dom";
import { useGetDonationQuery } from "../../redux/api/api";

type TDonation = {
  title: string;
  image: string;
  category: string;
  amount: number;
  // Add more fields as needed
};
const DonationsTabile = () => {
  const { data, isLoading, error } = useGetDonationQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;
  if (!data) return null;
  console.log(data, "find my data");

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Link to="/dashboard/create-donation">
          <button className="btn bg-cyan-300">Add Donation post</button>
        </Link>
      </div>
      <div className="overflow-x-auto bg-slate-300 rounded-md">
        <table className="table">
          <thead className="text-xl">
            <tr>
              <th></th>
              <th>title</th>
              <th>category</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {data.donations.map((item: TDonation) => (
              <tr key={item.title} className="text-xl">
                <th></th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>
                  <button className="bg-cyan-300 btn">Edit</button>
                </td>
                <td>
                  <button className="bg-cyan-300 btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationsTabile;
