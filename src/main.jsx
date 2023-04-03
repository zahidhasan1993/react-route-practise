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
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

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
        path : "/",
        element : <h1 className='text-4xl text-center md:mt-24 font-bold'>Welcome to our Friend<span className='text-red-600'>Club</span></h1>
      },
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
        
      },
      {
        path : "posts",
        element : <Posts></Posts>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path : "post/:postId",
        element : <PostDetails></PostDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
