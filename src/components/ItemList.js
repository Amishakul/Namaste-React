import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";

const ItemList = ({items, isCart, dummy}) => { // pass a prop
    const dispatch = useDispatch(); // dispatch hook

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item)) ; 
     };

     const handledeleteItem = (index) => {
        dispatch(removeItem(index))
     };

    // whatever i pass here in this additem action will get pass on to action.payload 
    // {payload: "pizza"} -> object passed on to the action arrgument present in addItem reducer function

    return (
        <div>
            {items.map((item, index) => (
                <div data-testid = "foodItems" className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                
                <div className="w-9/12">
                    <div className="py-2 font-bold"><span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mt-2">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleAddItem(item)} > Add + </button>

                    {isCart && (
                    <div>
                    <button className="p-2 mx-[27%] rounded-lg bg-red-500 text-white shadow-lg mt-[53%]" onClick={() => handledeleteItem(index)}>Remove -</button>
                    </div>
                    )}
                    
                    </div>

                    
                    
                    {item.card.info.imageId ? (
                            <img 
                                src={CDN_URL + item.card.info.imageId} 
                                className="w-full" 
                                alt={item.card.info.name} 
                            />
                        ) : (
                            <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-center text-sm text-gray-600">
                                Image not available
                            </div>
                        )}
                </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;