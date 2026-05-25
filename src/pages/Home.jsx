import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fir in your test"
        }
      />
      {/* categories tab section */}
      {/* dynamic nested component */}
    </div>
  );
};

export default Home;
