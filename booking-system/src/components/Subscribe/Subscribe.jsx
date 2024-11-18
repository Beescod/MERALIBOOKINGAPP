import React from "react";
import Banner from "../../assets/images/Nail-services.jpeg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "85vh", // Adjust the height as needed
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
