import { CDN_URL } from "../Utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="res-logo rounded-lg"
        alt="res-logo" 
        src={CDN_URL + cloudinaryImageId} />
        
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    );
};




// Higher Order Component

// Input - RestaurantCard => Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => { // returns an component after enhancing the component
        return ( // component returns an piece of jsx
            <div>
                <label>Promoted</label> 
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

// the above higher order function is an enhanced version of the resaurant card with an promoted label

export default RestaurantCard;