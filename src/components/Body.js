import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";


const Body = () => {

    // Local State Variable - Super Powerful variable
    //const [listofRestaurants, setListOfRestaurant] = useState(resList);
    // By default we are passing reslist inside listofRestaurants variable

    const [listofRestaurants, setListOfRestaurant] = useState([]);
    // by default listofrestaurants will be empty
    
    // Normal JS Variable
    //let listofRestaurants = [];


    // Normal JS Variable
    // let listofRestaurantsJS = [{
    //     data: {
    //       id: "74453",
    //       name: "Domino's Pizza",
    //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //       cuisines: ["Pizzas"],
    //       costForTwo: 40000,
    //       deliveryTime: 45,
    //       avgRating: "4.5",
          
    //     },
        
    //   },
    //   {
    //     data: {
    //       id: "74454",
    //       name: "KFC",
    //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //       cuisines: ["Pizzas"],
    //       costForTwo: 40000,
    //       deliveryTime: 45,
    //       avgRating: "3.8",
          
    //     },
        
    //   },
    //   {
    //     data: {
    //       id: "74456",
    //       name: "MCD",
    //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    //       cuisines: ["Pizzas"],
    //       costForTwo: 40000,
    //       deliveryTime: 45,
    //       avgRating: "4.1",
          
    //     },
        
    //   },]

    // useEffect is passed a callback function i.e. arrow function. First the body component will render and then after some miliseconds, this useEffect function will be automatically called(as it is a callback function), and then whatever data is present in this useEffect function will be rendered.

    useEffect(() => {
        fetchData();
        //console.log("useEffect Called");
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        
        // optional chaining
         // setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);

    };

    // Conditional Rendering: Rendering on the basis of condition
    // if(listofRestaurants.length === 0) {
    //     // return <h1>Loading.....</h1>
    //     return <Shimmer/>
    // }

    //console.log("Body rendered");

    // conditon rendering using ternary operator
    return listofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" />
                <button onClick={() => {
                    // Filter the restaurant cards and update the UI
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                // Filter logic here
                const filteredList = listofRestaurants.filter((res) => res.data.avgRating > 4);
                setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
            </button>

            </div>
            <div className="res-container">
            {/* <RestaurantCard  resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
            <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
            {listofRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))
            }
            </div>
        </div>
    );
};

export default Body;