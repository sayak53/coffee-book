import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
const Mainlayout = () => {
  return (
    <div>
      <Toaster />
      {/* Navbar */}
      <div className="h-12">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-229px)] py-12 container mx-auto px-12 lg:py-16 lg:px-16">
        {/* Dynamic section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainlayout;
