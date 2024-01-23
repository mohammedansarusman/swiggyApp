import React from "react";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Help from "./Components/Help";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import { lazy,Suspense } from "react";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(
    ()=>{
        return import("./Components/Grocery")
    })
console.log(Grocery)
const AppComponent = () => {
    return <div id="master">
        <HeaderComponent />
        <Outlet />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/help",
                element: <Help />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
