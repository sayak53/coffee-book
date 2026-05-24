import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div className="min-h-[calc(100vh-421px)]"></div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Mainlayout;
