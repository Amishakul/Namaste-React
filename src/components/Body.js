import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/MockData";
import { useState } from "react";


const Body = () => {

    // Local State Variable - Super Powerful variable
    const [listofRestaurants, setListOfRestaurant] = useState(resList);
    // By default we are passing reslist inside listofRestaurants variable
    
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
    return (
        <div className="body">
            <div className="filter">
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