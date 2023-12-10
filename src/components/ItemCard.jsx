import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({
  image,
  publisher_url,
  title,
  publisher,
  recipe_url,
  ingredients,
}) => {
  return (
    <div className="w-full flex md:flex-col">
      <div className="left w-full text-center">
        <Link to="/recipe">
          <button className="bg-orange-400 py-2 px-2 my-5 text-white rounded ">
            Back to Recipe list
          </button>
        </Link>
        <div className="flex justify-center items-center">
          <img src={image} alt={title} className="h-96 w-3/4 my-5" />
        </div>
      </div>
      <div className="right p-3 w-full">
        <h1 className="text-2xl font-bold text-slate-700 my-2">{title}</h1>
        <p className="navs text-xl font-semiBold">{`provided by ${publisher}`}</p>
        <div className="mt-6">
          <a
            href={publisher_url}
            target="_blank"
            className="bg-blue-500 px-3 text-white rounded py-2 ml-3"
          >
            Publisher Webpage
          </a>
          <a
            href={recipe_url}
            target="_blank"
            className="bg-green-500 px-3 text-white rounded py-2 ml-3"
          >
            Recipe url
          </a>
        </div>
        <h1 className="mt-7 text-xl font-bold">Ingredients:</h1>
        <p>{ingredients}</p>
      </div>
    </div>
  );
};

export default ItemCard;
