import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import { Cartpage } from "./components/Cart";
import ErrorPage from "./components/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart", 
    element: <Cartpage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

