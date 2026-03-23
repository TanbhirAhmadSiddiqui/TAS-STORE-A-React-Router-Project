import React from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="p-2">
        Home
      </NavLink>
      <NavLink to="/apps" className="p-2">
        Apps
      </NavLink>
      <NavLink to="/installation" className="p-2">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-300 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          TAS-STORE
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="bg-blue-500 px-6 py-3 rounded">Contribute</Link>
      </div>
    </div>
  );
};

export default Navbar;
