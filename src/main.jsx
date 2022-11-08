import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'

import Root from './routes/root'
// import App from './App'
import './index.css'

const routers = createBrowserRouter([{
  path:'/',
  element:<Root/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
    {/* <App /> */}
  </React.StrictMode>
)
