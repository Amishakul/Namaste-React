import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    //const [resInfo, setResInfo] = useState(null);

    const{ resId } = useParams(); // gives the exact restaurant ID from the api in the variable resID
    console.log(resId)

    const resInfo = useRestaurantMenu(resId); // custom hook

    const [showIndex, setShowIndex] = useState(null);

    const dummy = "Dummy Data";

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json)
    //     setResInfo(json.data)
    // };

    if (resInfo === null) return <Shimmer/>

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards)

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log(categories)

    const handleToogle = (index) => {
        if (showIndex == index){
            setShowIndex(null)
        } else {
            setShowIndex(index)
        }

    };

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {/* categories accordions */}
            {categories.map((category, index) => (

                // restaurant category is an controlled component now

                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                    showItems = {index === showIndex ? true : false} // to show or hide the list of items for each category(accordions)
                    
                    // setShowIndex={() => setShowIndex(index)} // to show the accordion which is been clicked by the user, basically helping to dynamically change the accordion, expand when user clicks on certain accordion

                    setShowIndex={() => handleToogle(index)}
                    dummy = {dummy}

                /> // passing props to  restaurantcategory component
            ))}




            {/* <h2 className="font-bold">Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} {" Rs "} - {item.card.info.price/100 ||item.card.info.defaultPrice/100}</li>
                ))}
                
            </ul> */}
        </div>
    );
    
};

export default RestaurantMenu;