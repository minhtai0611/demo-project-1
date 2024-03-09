import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorApp from "./ErrorAppComponent/ErrorApp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorApp />
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
