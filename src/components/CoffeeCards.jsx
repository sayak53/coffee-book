import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const data = useLoaderData();
  console.log(data);
  // eslint-disable-next-line no-unused-vars
  const { category } = useParams();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeCards;
