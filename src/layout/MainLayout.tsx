import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
const MainLayout = () => {
  return (
    <div className="mx-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
