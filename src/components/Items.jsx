import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const Items = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        return setData(data.recipe);
      });
  }, [id]);

  return (
    <div>
      <ItemCard
        image={data.image_url}
        publisher_url={data.publisher_url}
        title={data.title}
        recipe_url={data.source_url}
        ingredients={data.ingredients}
        publisher={data.publisher}
      />
    </div>
  );
};

export default Items;
