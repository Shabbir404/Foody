import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar/Navbar.jsx';
import About from './About/About.jsx';
import Details from './Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar></Navbar>
      <App></App>
    </div>,
    loader: () => {
      return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(response => response.json())
    }
  },
  {
    path: "/about",
    element: <div> <Navbar></Navbar>, <About></About ></div>
  },
  {
    path: "/:id",
    element: <div> <Navbar></Navbar>, <Details></Details></div>,
    loader: ({ params }) =>
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
