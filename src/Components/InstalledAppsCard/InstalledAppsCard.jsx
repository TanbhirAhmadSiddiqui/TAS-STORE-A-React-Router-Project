import React from "react";

const InstalledAppsCard = ({ installApp }) => {
  const { image, title, downloads, ratingAvg, size } = installApp;
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
        <button className="btn btn-primary me-5">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;
