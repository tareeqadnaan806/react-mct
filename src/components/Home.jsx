import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex justify-center items-center h-screen flex-col">
      <h1 className="home-title rounded">AMAZING RECIPES</h1>
      <Link to="/recipe">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          SEARCH RECIPES
        </button>
      </Link>
    </div>
  );
};

export default Home;
