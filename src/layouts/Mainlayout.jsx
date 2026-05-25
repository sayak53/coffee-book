import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="min-h-[calc(100vh-229px)] py-16 container mx-auto px-16">
        {/* Dynamic section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainlayout;
