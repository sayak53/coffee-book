import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="h-full relative">
      <Link
        to={`/coffees/${id}`}
        className="h-full block transition duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden cursor-pointer"
      >
        <figure className="w-full h-48 lg:h-56 overflow-hidden rounded-t-2xl">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
