import React from "react";
import { useLoaderData, useParams } from "react-router";

const CardDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const cardDetails = apps.find((app) => app.id === parseInt(id));
  console.log(cardDetails);
  return (
    <div>
      <h1>ami card Details</h1>
    </div>
  );
};

export default CardDetails;
