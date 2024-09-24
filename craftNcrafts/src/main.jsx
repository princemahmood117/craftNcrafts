import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Root from './layout/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AddCrafts from './components/AddCrafts.jsx';
import AllCrafts from './components/AllCrafts.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/addCrafts',
        element : <AddCrafts></AddCrafts>
      },
      {
        path : '/allCrafts',
        element : <AllCrafts></AllCrafts>,
        loader : ()=> fetch('http://localhost:5000/crafts')
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
