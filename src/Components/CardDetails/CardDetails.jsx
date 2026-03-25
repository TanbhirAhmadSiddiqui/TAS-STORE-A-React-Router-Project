import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../../utilities/addToLocalStorage";

const CardDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const cardDetails = apps.find((app) => app.id === parseInt(id));
  const { image, title } = cardDetails;
  //   add to local Storage function
  const handleAddToLocalStorage = (id) => {
    // this function call from utilities
    addToLocalStorage(id);
  };
  return (
    <div className="max-w-300 mx-auto">
      <div className="flex">
        <div className="w-87.5 h-87.5">
          <img src={image} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <button
            onClick={() => handleAddToLocalStorage(id)}
            className="btn btn-primary"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
