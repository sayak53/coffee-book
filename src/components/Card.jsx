const Card = ({ coffee }) => {
  // eslint-disable-next-line no-unused-vars
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return <div>{name}</div>;
};

export default Card;
