import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./config";

const router = createBrowserRouter(routes);
export default function RouterComponent() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>你的网页跑丢了了哦~~</div>}
    ></RouterProvider>
  );
}
