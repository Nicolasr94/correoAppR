import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider} from "react-router-dom";
import LayoutIndex from './Layouts/LayoutIndex.jsx';
import App from './App.jsx'
import { Subsidiary } from './Routes/Subsidiary.jsx';
import './index.css'
import SelectSubsidiary from './components/SelectSubsidiary.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex></LayoutIndex>,
    children: [
      {
        path:'/',
        element:<App></App>
      } 
    ]
  },
  {
    path:"/selectSubsidiary",
    element:<SelectSubsidiary></SelectSubsidiary>,
  },
  {
    path:"/subsidiary/:subsidiaryId",
    element:<Subsidiary></Subsidiary>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
