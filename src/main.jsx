import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home/home-page';
import ErrorPage from './routes/error-page';
// import App from './App'
import './index.css'

const routers = createBrowserRouter([{
  path:'/',
  element:<HomePage/>,
  errorElement:<ErrorPage/>
  
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
    {/* <App /> */}
  </React.StrictMode>
)
