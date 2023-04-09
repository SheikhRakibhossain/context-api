import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from '../src/components/Layout/Main';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Error from './components/Error/Error';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main />,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },

      { path:'/review',
        element:<OrderReview></OrderReview>

      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'*',
        element:<Error></Error>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
