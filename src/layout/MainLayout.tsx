import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
