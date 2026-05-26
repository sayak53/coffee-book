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
      <div role="tablist" className="tabs tabs-lift">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
      {/* dynamic nested component */}
    </div>
  );
};

export default Home;
