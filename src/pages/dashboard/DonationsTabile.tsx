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
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>category</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {data.donations.map((item: TDonation) => (
              <tr key={item.title}>
                <th></th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationsTabile;
