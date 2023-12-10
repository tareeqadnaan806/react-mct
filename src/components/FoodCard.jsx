import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ image, title, publisher, source_url, recipe_id }) => {
  return (
    <div className="w-96 m-4">
      <img src={image} alt={title} className="w-full h-52" />
      <h2 className="text-xl font-bold my-2">{title}</h2>
      <p className="navs font-semiBold text-orange-900 text-xl">{publisher}</p>
      <p className="nav my-2"></p>
      <Link to={recipe_id}>
        <button className="bg-blue-500 px-3 text-white rounded py-2">
          Details
        </button>
      </Link>
      <a
        href={source_url}
        target="_blank"
        className="bg-green-500 px-3 text-white rounded py-2 ml-3"
      >
        Recipe url
      </a>
    </div>
  );
};

export default FoodCard;
