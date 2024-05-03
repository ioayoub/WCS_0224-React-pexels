import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ImagesPage from "./pages/ImagesPage.jsx";
import SingleImagePage from "./pages/SingleImagePage.jsx";

// Ensemble des routes de notre application
const router = createBrowserRouter(
  [
    {
      element: <App/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
          loader: () => fetch("https://api.pexels.com/v1/search?query=bears", {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_TOKEN
            }
          })
        },
        {
          path: "/articles",
          element: <ImagesPage/>
        },
        {
          path: "/articles/:id",
          element: <SingleImagePage />,
          loader: ({params}) => fetch(`https://api.pexels.com/v1/photos/${params.id}`, {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_TOKEN
            }
          })
        }
      ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Consommation des routes déclarées dans la constante "router" au-dessus */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
