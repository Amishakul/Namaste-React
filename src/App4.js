import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Chunking, Code Splitting, Dynamic bundling, lazy loading, on demand loading, dynamic import(all the code does not comes at once.)
// Lazy loading: we will not load all the components all at once, we will load few components only when required, lazy loading


const Grocery = lazy(() => import("./components/Grocery")); // lazy is a call back function which takes import function and this import function has path of the component which is to be loaded i.e. Grocery component in this case. This lazy function is provided to us as a function by react itself.

const AppLayout = () => {
    return (
        <div className="app">
        <Header />
        <Outlet />
        
        </div>
    );

};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>

            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            
        ],
        errorElement: <Error/>,
    },



    // {
    //     path: "/about",
    //     element: <About/>,
    // },
    // {
    //     path: "/contact",
    //     element: <Contact/>,
    // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>)