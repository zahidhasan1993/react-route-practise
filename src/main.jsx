import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorHandle from './Components/ErrorHandle/ErrorHandle';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <App></App>

//   },
//   {
//     path : "/About",
//     element : <h1>This is about section</h1>
//   },
//   {
//     path : "/Contact",
//     element : <h1>This is contact section</h1>
//   }
// ])
const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    errorElement : <ErrorHandle></ErrorHandle>,
    children : [
      {
        path : "about",
        element : <About></About>
      },
      {
        path : "contact",
        element : <Contact></Contact>
      },
      {
        path : "users",
        element : <Users></Users>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')
        
      },
      {
        path : "user/:userId",
        element : <UserDetails></UserDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
