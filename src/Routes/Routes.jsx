import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import CardDetails from "../Components/CardDetails/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/trendingApps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/apps.json"),
        Component: Apps,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/apps.json"),
        Component: CardDetails,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
