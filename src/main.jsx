import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import route from "./routes/route"
  const router = createBrowserRouter(route)
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  
)
