import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import NotExist from './Components/NotExist/NotExist'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'





export default function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children:
        [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'portfolio', element: <Portfolio /> },
          { path: 'contact', element: <Contact /> },
          { path: '*', element: <NotExist /> },
        ]
    },
  ])
  return <>
    <RouterProvider router={routers} />
  </>


}




