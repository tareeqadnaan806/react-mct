import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import FoodCard from "./FoodCard";

const SearchBar = () => {
  const [query, setQuery] = useState("potato");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        return setData(data.recipes);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center m-3 navs">
        Search Recipes With <span className="text-red-500">Food</span>2Fork
      </h1>
      <div className="flex justify-center items-center my-4">
        <input
          type="search"
          className="input-search"
          placeholder="search recipes"
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((item, index) => {
          if (item.title.toLowerCase().includes(query.toLowerCase())) {
            return (
              <div
                key={index}
                className="border-2 border-black m-4 box-shadow rounded-xl border-solid"
              >
                <FoodCard
                  image={item.image_url}
                  title={item.title}
                  publisher={item.publisher}
                  source_url={item.source_url}
                  recipe_id={item.recipe_id}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SearchBar;
