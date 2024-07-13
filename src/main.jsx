import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "./components/pages/todo.jsx";
import Home from "./components/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
