import React from "react";
import { Link } from "react-router";

const Card = ({ app }) => {
  const { downloads, image, ratingAvg, title, id } = app;
  return (
    <Link to={`/apps/${id}`} className="border rounded-xl">
      <div>
        <img className="h-79 w-full rounded-xl p-2" src={image} alt="" />
      </div>
      <div>
        <h1 className="px-2">{title}</h1>
      </div>
      <div className="flex justify-between px-2">
        <p>{downloads}</p>
        <p>{ratingAvg}</p>
      </div>
    </Link>
  );
};

export default Card;
