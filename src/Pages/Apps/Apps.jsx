import React from "react";
import { useLoaderData } from "react-router";
import Card from "../../Components/Card/Card";

const Apps = () => {
  const apps = useLoaderData();
  return (
    <div className=" max-w-300 mx-auto">
      <div className="flex flex-col items-center justify-center pb-10">
        <h1 className="text-5xl font-bold pb-5">Our All Applications</h1>
        <p className="text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div>
        <div>
          <h1>{apps.length} Apps Found</h1>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {apps.map((app) => (
          <Card key={app.id} app={app}></Card>
        ))}
      </div>
    </div>
  );
};

export default Apps;
