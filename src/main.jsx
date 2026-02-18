import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Auth from './pages/Auth.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AllProduct from './pages/AllProduct.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
const routes=createBrowserRouter([
  {
    path:"/Dash-Stack",
    element:<Auth/>,
    children:[
      {
        path:"login",
        element:<Login />
      },{
        path:"register",
        element:<Register />
      }]
  },{
    path:"/Dash-Stack/dashboard",
    element:<Dashboard />,
    children:[
      {
        path:"",
        element:<AllProduct />,
      },{
        path:"add",
        element:<AddProduct />,
      },{
        path:"edit/:id",
        element:<EditProduct />,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
