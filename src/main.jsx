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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar></Navbar>
      <App></App>
    </div>,
  },
  {
    path: "/about",
    element: <div> <Navbar></Navbar>, <About></About ></div>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
