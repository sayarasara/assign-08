import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root';
import App from './App';
import CardDetail from './Api/CardDetail';
import Errorpage from './Errorpage';
import MyBookings from './MyBookings';
import Blogs from './Blogs';
import Contact from './Navbar/Contact';

const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
    errorElement:<Errorpage></Errorpage>,
   children: [
    {
      index: true,
      Component: App
    },
    {
      path: "doctors/:id",
      Component: CardDetail

    },
    {
      path:"MyBookings",
      Component: MyBookings
    },
    {
      path:"Blogs",
      Component:Blogs
    },
    {
      path:"Contact",
      Component:Contact
    },
 
   ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
