import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './assets/pages/Root.jsx'
import ErrorPage from './assets/pages/ErrorPage.jsx'
import AuthProvider from './assets/firebase/AutherProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllTouristSport from './assets/pages/AllTouristSport.jsx'
import Home from './assets/pages/Home.jsx'
import Login from './assets/form/Login.jsx'
import Register from './assets/form/Register.jsx'
import AddTouristSport from './assets/pages/AddTouristSport.jsx'
import Mylist from './assets/pages/Mylist.jsx'
import AlltouristsportDetails from './assets/pages/AlltouristsportDetails.jsx'
import TouristSportDetailsCard from './assets/pages/TouristSportDetailsCard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltouristsport",
        element: <AllTouristSport></AllTouristSport>,
        loader: () => fetch('http://localhost:5000/tour')
      },
      {
        path: "/details/:id",
        element: <AlltouristsportDetails></AlltouristsportDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/tour/${params.id}`)
      },
      {
        path: "/addtouristsport",
        element: <AddTouristSport></AddTouristSport>,
      },
      {
        path: "/mylist",
        element: <Mylist></Mylist>,

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/touristsport/:id",
        element: <TouristSportDetailsCard></TouristSportDetailsCard>,
        loader: ({ params }) => fetch(`http://localhost:5000/sport/${params.id}`)
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
