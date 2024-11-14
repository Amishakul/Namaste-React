import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

// Chunking, Code Splitting, Dynamic bundling, lazy loading, on demand loading, dynamic import(all the code does not comes at once.)
// Lazy loading: we will not load all the components all at once, we will load few components only when required, lazy loading


const Grocery = lazy(() => import("./components/Grocery")); // lazy is a call back function which takes import function and this import function has path of the component which is to be loaded i.e. Grocery component in this case. This lazy function is provided to us as a function by react itself.

const AppLayout = () => {
    
    const [userName, setUserName] = useState();
    
    // authentication

    useEffect(() => {
        //Make an API call and send username and password

        const data = {
            name: "Amisha Kulkarni"
        };
        setUserName(data.name);

    }, []);
    
    
    return (
        <Provider store={appStore}>
        {/* pass store as a prop to the provider */}

        {/* outside of this context we will have "Default Value" */}
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}> 

        <div className="app">
        <Header />
        <Outlet />
        
        </div>
        </UserContext.Provider> 
        {/* This UserContext Provider will be present in very component of the app, and whenever this loggedInUser is used it will get replaced by Amisha Kulkarni instead of the default value set. Basically Over writing the default value is done over here. */}

        </Provider>
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
            {
            path: "/cart",
            element: <Cart/>,
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