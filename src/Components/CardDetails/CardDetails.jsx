import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../../utilities/addToLocalStorage";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const CardDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const cardDetails = apps.find((app) => app.id === parseInt(id));
  const {
    image,
    title,
    ratings,
    description,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
  } = cardDetails;

  const data = ratings.map((r) => ({
    name: r.name,
    uv: r.count,
  }));

  //   add to local Storage function
  const handleAddToLocalStorage = (id) => {
    // this function call from utilities
    addToLocalStorage(id);
  };
  return (
    <div className="max-w-300 mx-auto py-10">
      <div className="flex">
        <div>
          <img className="w-87.5 h-87.5" src={image} alt={title} />
        </div>
        <div className="w-[70%] ps-5">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-xl py-3">
            Developed by <span className="text-blue-400">{companyName}</span>
          </p>
          <div className="divider"></div>
          <div className="flex gap-10 py-2.5">
            <div className="flex flex-col gap-3">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co.com/zVqBg87d/icon-downloads.png"
                alt="Downloads"
              />
              <p>Downloads</p>
              <h1 className="text-4xl font-extrabold">{downloads}</h1>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co.com/NnxpKsXd/icon-ratings.png"
                alt="Ratings"
              />
              <p>Average Ratings</p>

              <h1 className="text-4xl font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co.com/6RDWjP64/icon-review.png"
                alt="reviews"
              />
              <p>Total Reviews</p>

              <h1 className="text-4xl font-extrabold">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={() => handleAddToLocalStorage(id)}
            className="btn btn-primary mt-6"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div className="divider py-5"></div>
      {/* bar Chart */}
      <div>
        <h1 className="text-xl ps-10 pb-10">Ratings</h1>
        <BarChart
          className="mb-5"
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            label={{
              position: "insideBottomRight",
              value: "Stars",
              offset: -10,
            }}
          />

          <YAxis
            label={{
              position: "insideTopLeft",
              value: "Count",
              angle: -90,
              dy: 60,
            }}
          />

          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="divider py-5"></div>
      <div>
        <h1 className="text-3xl font-bold">Description</h1>
        <h1 className="py-5">{description}</h1>
      </div>
    </div>
  );
};

export default CardDetails;
