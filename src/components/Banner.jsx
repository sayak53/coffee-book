import bannerimg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div
      className="hero bg-base-200 min-h-[400px] lg:min-h-[600px] rounded-3xl w-[95%] mx-auto"
      style={{
        backgroundImage: `url(${bannerimg})`,
      }}
    ></div>
  );
};

export default Banner;
