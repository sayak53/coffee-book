import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavourites, removeFavourites } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favourites = getAllFavourites();
    setCoffees(favourites);
  }, []);

  const handleRemove = (id) => {
    removeFavourites(id);
    const favourites = getAllFavourites();
    setCoffees(favourites);
  };
  return (
    <>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage Coffes that you have previously added as favourite.You can view or remove them from here"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12 w-[95%] mx-auto">
        {coffees.map((coffee) => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
