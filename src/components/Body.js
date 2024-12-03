import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
// import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {

    // Local State Variable - Super Powerful variable
    //const [listofRestaurants, setListOfRestaurant] = useState(resList);
    // By default we are passing reslist inside listofRestaurants variable

    const [listofRestaurants, setListOfRestaurant] = useState([]);
    // by default listofrestaurants will be empty

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // higher order function
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    console.log("Body Rendered", listofRestaurants);
    
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

    const fetchData = async () => { // async arrow function
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        
        // optional chaining
        setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

     };

     const onlineStatus = useOnlineStatus(); // custom hook

     if (onlineStatus === false) 
        return (
        <h1 className="p-4 m-4 text-center font-bold">Looks like you're offline!! Please check your internet connection;
        </h1>
     )

     const {loggedInUser, setUserName} = useContext(UserContext); // context hook

    // Conditional Rendering: Rendering on the basis of condition
    // if(listofRestaurants.length === 0) {
    //     // return <h1>Loading.....</h1>
    //     return <Shimmer/>
    // }

    //console.log("Body rendered");

    // conditon rendering using ternary operator
    return listofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter  flex justify-center items-center space-x-4 m-4">
            <div className="search m-4 p-4 flex items-center space-x-4">
                <input type="text"  data-testid = "searchInput" className="border border-solid border-gray-300 rounded-lg p-3 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out" placeholder="Search for restaurants..."
                value={searchText} onChange={(e) => {
                    setSearchText(e.target.value); // to update the value on the search bar as user types and to update that value to searchText via setSearchText using onchange event.
                    // WE ARE USING SEARCHTEXT USESTATE SO AS WHEN THE USER TYPES A KEYWORD IN THE SEARCH BOX AND PRESS SEARCH BUTTON, THE UI WILL GET UPDATE
                }} />
                <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out" onClick={() => {
                    // Filter the restaurant cards and update the UI
                    // we will get the data from SearchText
                    console.log(searchText);

                    const filteredRestaurant = listofRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>

            <div className="search m-4 p-4 flex items-center">
            <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out" onClick={() => {
                // Filter logic here
                const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4.5);
                setFilteredRestaurant(filteredList);
            }}>
            Top Rated Restaurants
            </button>
            </div>

            <div className="search m-4 p-4 flex items-center">
                <label className="font-semibold text-lg text-gray-700 p-2">UserName</label>
                <input className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 ease-in-out" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
            </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {/* <RestaurantCard  resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
            <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
            {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >

                {/* if the restaurant is promoted then add a promoted label to it. */}

                {restaurant.info.promoted
                    ?(<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)} 
                </Link>
            ))
            }
            </div>
        </div>
    );
};

export default Body;