import { CDN_URL } from "../Utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    console.log(resData);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card m-4 p-4 w-[280px] h-[380px] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 ">
        <img className="res-logo rounded-lg w-full h-[150px] object-cover"
        alt="res-logo" 
        src={CDN_URL + cloudinaryImageId} />

        <div className="mt-4 h-[200px] overflow-hidden">
        
        <h3 className="font-bold text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 truncate">{name}</h3>
        <p className="text-gray-600 text-sm truncate">{cuisines.join(" , ")}</p>
        <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-400 text-xl">{avgRating}</span>
        <span className="text-gray-600 text-sm">⭐</span>
        </div>

        <div className="mt-2 text-sm text-gray-600">
        <p className="font-medium">Cost for two: <span className="text-green-600">{costForTwo}</span></p>
        <p className="text-gray-500">{sla?.slaString}</p>
        </div>
        </div>
        </div>
        
    );
};




// Higher Order Component

// Input - RestaurantCard => Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => { // returns an component after enhancing the component
        return ( // component returns an piece of jsx
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label> 
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

// the above higher order function is an enhanced version of the resaurant card with an promoted label

export default RestaurantCard;