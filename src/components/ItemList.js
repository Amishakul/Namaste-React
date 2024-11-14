import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";

const ItemList = ({items, dummy}) => { // pass a prop
    const dispatch = useDispatch(); // dispatch hook

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item)) ; 
     };

    // whatever i pass here in this additem action will get pass on to action.payload 
    // {payload: "pizza"} -> object passed on to the action arrgument present in addItem reducer function

    return (
        <div>
            {items.map((item) => (
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                
                <div className="w-9/12">
                    <div className="py-2"><span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleAddItem(item)} > Add + </button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;