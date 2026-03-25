import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero bg-base-200 h-86">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            We Build
            <br />
            <span className="text-sky-500">Productive</span> Apps
          </h1>
          <p className="py-6">
            At TAS-STORE, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center gap-6">
            <Link className="border rounded px-5 py-2">Google Play</Link>
            <Link className="border rounded px-5 py-2">App Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
