import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Root from "./layout/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AddCrafts from "./components/AddCrafts.jsx";
import AllCrafts from "./components/AllCrafts.jsx";
import UpdateCraft from "./components/UpdateCraft.jsx";
import CraftDetails from "./components/CraftDetails.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContextProvider from "./components/ContextProvider/ContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCrafts",
        element: <AddCrafts></AddCrafts>,
      },
      {
        path: "/allCrafts",
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },

      {
        path: "/updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },

      {
        path: "/craftDetails/:id",
        element: <CraftDetails></CraftDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },

      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
