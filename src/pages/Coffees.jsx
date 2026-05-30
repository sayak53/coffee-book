import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortby) => {
    if (sortby === "popularity") {
      //sort by popularity
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortby === "rating") {
      //sortby rating
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl text-center md:text-left font-thin">
            Sort Coffee&apos;s by Popularity and Rating-&gt;
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning font-bold text-black"
          >
            Sort by Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning font-bold text-black"
          >
            Sort by Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-[95%] mx-auto">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
