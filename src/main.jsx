import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home/home-page';
import ResultPage from './pages/Result/result-page';
import DeatilPage from './pages/Deatil/detail-page';
import ErrorPage from './routes/error-page';
import LoginPage from './pages/Login/login-page';
// import App from './App'
import './index.css'


const routers = createBrowserRouter([
  {
  path:'/',
  element:<HomePage/>,
  errorElement:<ErrorPage/> ,
  // children:[
  //   {
  //     path:'/Detail/:id',
  //     element:<deatilPage/>,
  //     errorElement:<ErrorPage/> 
  
  //   },
  // ],
  },
  {
    path:'/detail/:id',
    element:<DeatilPage/>,
    errorElement:<ErrorPage/> 

  },
  {
    path:'/Result',
    element:<ResultPage/>,
    errorElement:<ErrorPage/> 
  },
  {
    path:'/Favorites',
    element:<section>welcome to Favorites</section>,
    errorElement:<ErrorPage/> 
  },
  {
    path:'/Login',
    element:<LoginPage/>,
    errorElement:<ErrorPage/> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
    {/* <App /> */}
  </React.StrictMode>
)
