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
import TouristSportDetailsCard from "./assets/pages/TouristSportDetailsCard.jsx"
import UpdateTourCard from './assets/pages/UpdateTourCard.jsx'
import AlltouristsportDetails from "./assets/pages/AlltouristsportDetails.jsx"
import PrivateRout3 from './assets/firebase/PrivateRout3.jsx'




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
        element: <PrivateRout3> <AlltouristsportDetails></AlltouristsportDetails></PrivateRout3>,
        loader: ({ params }) => fetch(`http://localhost:5000/tourdetail/${params.id}`)
      },
      {
        path: "/addtouristsport",
        element: <PrivateRout3> <AddTouristSport></AddTouristSport></PrivateRout3>,
      },
      {
        path: "/mylist",
        element: <PrivateRout3> <Mylist></Mylist></PrivateRout3>,

      },
      {
        path: "updatetour/:id",
        element: <UpdateTourCard></UpdateTourCard>,
        loader: ({ params }) => fetch(`http://localhost:5000/updatetour/${params.id}`)

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
