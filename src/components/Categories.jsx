import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lift w-full flex justify-around">
      {categories.map(category => (
        <Link key={category.category} to="/cards" role="tab" className="tab">
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
