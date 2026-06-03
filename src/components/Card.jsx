import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
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
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5"
        >
          <FaTrash />
        </div>
      )}
    </div>
  );
};

export default Card;
