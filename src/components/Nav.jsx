import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex h-[70px] ml-5 items-center">
        <li className="mr-3">
          <h1 className="logo text-2xl">
            <span className="text-red-500">Food</span> 2 Fork
          </h1>
        </li>
        <li className="mx-5 text-xl navs">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-xl navs">
          <Link to="/recipe">Recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
