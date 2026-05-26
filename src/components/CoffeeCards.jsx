import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const data = useLoaderData();
  console.log(data);
  // eslint-disable-next-line no-unused-vars
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category,
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data);
    }
  }, [category, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeCards;
