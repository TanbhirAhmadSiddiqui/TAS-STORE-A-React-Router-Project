import React from "react";
import Card from "../Card/Card";

const TrendingApps = ({ trendingApps }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-5xl font-bold pb-5">Trending Apps</h1>
        <p className="text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {trendingApps.map((app) => (
          <Card key={app.id} app={app}></Card>
        ))}
      </div>
      <div className="text-center py-10">
        <button className="btn bg-blue-500 px-7">Show All</button>
      </div>
    </div>
  );
};

export default TrendingApps;
