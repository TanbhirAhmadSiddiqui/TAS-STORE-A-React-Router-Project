import React from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrendingApps.jsx/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const trendingApps = useLoaderData();
  return (
    <div className=" max-w-300 mx-auto">
      <Hero></Hero>
      <Banner></Banner>
      <TrendingApps trendingApps={trendingApps}></TrendingApps>
    </div>
  );
};

export default Home;
