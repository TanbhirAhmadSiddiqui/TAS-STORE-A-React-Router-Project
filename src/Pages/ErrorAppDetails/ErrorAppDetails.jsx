import React from "react";
import { Link } from "react-router";

const ErrorAppDetails = () => {
  return (
    <div className="max-w-300 mx-auto flex flex-col items-center justify-center gap-5 py-20">
      <img src="https://i.ibb.co.com/TxqqCLSB/App-Error.png" alt="Error Apps" />
      <h1 className="text-5xl font-semibold">Oops, App not found!</h1>
      <p>The page you are looking for is not available.</p>
      <Link
        className="w-37.5 h-12 bg-blue-900 rounded flex items-center justify-center"
        to="/apps"
      >
        Go Back to Apps!
      </Link>
    </div>
  );
};

export default ErrorAppDetails;
