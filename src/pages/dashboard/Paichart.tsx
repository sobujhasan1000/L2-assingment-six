import { BarChart } from "@mui/x-charts";
import { useGetDonationQuery } from "../../redux/api/api";

type TDonation = {
  title: string;
  image: string;
  category: string;
  amount: number;
  _id: string;
  description: string;
};

const Paichart = () => {
  const { data, isLoading, error } = useGetDonationQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;
  if (!data) return null;

  // Transform data for BarChart
  const categories = data.donations.map(
    (donation: TDonation) => donation.category
  );
  const amounts = data.donations.map((donation: TDonation) => donation.amount);

  return (
    <div>
      <BarChart
        xAxis={[
          {
            id: "donationCategories",
            data: categories,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: amounts,
          },
        ]}
        width={800}
        height={500}
      />
    </div>
  );
};

export default Paichart;
