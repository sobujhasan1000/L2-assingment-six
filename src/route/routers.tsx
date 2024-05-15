import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loging from "../pages/loging/Loging";
import Home from "../layout/home/Home";
import Register from "../pages/Register";
import AllDonation from "../pages/allDonation/AllDonation";
import Dashboard from "../pages/dashboard/Dashboard";
import Paichart from "../pages/dashboard/Paichart";
import DonationsTabile from "../pages/dashboard/DonationsTabile";
import CreateDonation from "../pages/dashboard/CreateDonation";
import DonationDetail from "../pages/donationDetail";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Loging />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "donations/:_id",
        element: <DonationDetail />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "donations",
        element: <AllDonation />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Paichart />,
          },
          {
            path: "donations",
            element: <DonationsTabile />,
          },
          {
            path: "create-donation",
            element: <CreateDonation />,
          },
        ],
      },
    ],
  },
]);

export default route;
