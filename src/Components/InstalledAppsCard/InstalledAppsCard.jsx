import React, { useState } from "react";
import { getStoredApps } from "../../utilities/addToLocalStorage";

const InstalledAppsCard = ({ installApp, handleDelete }) => {
  const { id, image, title, downloads, ratingAvg, size } = installApp;
  return (
    <div className="border my-3 flex justify-between items-center">
      <div className="flex gap-5 p-5 items-center">
        <div>
          <img className="w-20 h-20" src={image} alt={title} />
        </div>
        <div className="flex flex-col gap-3">
          <div>{title}</div>
          <div className="flex gap-5">
            <span>{downloads}</span>
            <span>{ratingAvg}</span>
            <span>{size}</span>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-primary me-5"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
