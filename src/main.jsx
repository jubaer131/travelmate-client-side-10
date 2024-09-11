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
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Card1 from './assets/component/Card1.jsx'
import Card11Details from './assets/pages/Card11Details.jsx'
import Card2 from './assets/pages/Card2.jsx'
import Card3 from './assets/pages/Card3.jsx'
import Card4 from './assets/pages/Card4.jsx'
import Card5 from "./assets/pages/Card5.jsx"
import Card6 from './assets/pages/Card6.jsx'
import Countries from './assets/pages/Countries.jsx'
import PopularCountry from './assets/pages/PopularCountry.jsx'

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
        loader: () => fetch('https://travel-mate-server-kappa.vercel.app/tour')
      },
      {
        path: "/popularCountry",
        element: <PopularCountry></PopularCountry>
      },
      {
        path: "/details/:id",
        element: <PrivateRout3> <AlltouristsportDetails></AlltouristsportDetails></PrivateRout3>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/tourdetail/${params.id}`)
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
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/updatetour/${params.id}`)

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
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/sport/${params.id}`)
      },
      {
        path: "/card1",
        element: <Card1></Card1>,
      },
      {
        path: "/card11/:id",
        element: <Card11Details></Card11Details>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/sport/${params.id}`)
      },
      {
        path: "/card2",
        element: <Card2></Card2>,
      },
      {
        path: "/card22/:id",
        element: <Card11Details></Card11Details>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/updatetour/${params.id}`)
      },
      {
        path: "/card3",
        element: <Card3></Card3>,
      },
      {
        path: "/card33/:id",
        element: <Card11Details></Card11Details>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/sport/${params.id}`)
      },
      {
        path: "/card4",
        element: <Card4></Card4>,
      },
      {
        path: "/card44/:id",
        element: <Card11Details></Card11Details>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/updatetour/${params.id}`)
      },
      {
        path: "/card5",
        element: <Card5></Card5>,
      },
      {
        path: "/card55/:id",
        element: <Card11Details></Card11Details>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/updatetour/${params.id}`)
      },
      {
        path: "/card6",
        element: <Card6></Card6>,
      },
      {
        path: "/card66/:id",
        element: <Card11Details></Card11Details>,
        loader: ({ params }) => fetch(`https://travel-mate-server-kappa.vercel.app/updatetour/${params.id}`)
      },
    ],
  },








]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
