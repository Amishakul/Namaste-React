import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch()

    handleClearCart = () => {
        dispatch(clearCart());

    }

    

    return <div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
    <div className="py-4"><button className="p-2 m-2 bg-red-600 text-white rounded-lg hover:bg-red-500" onClick={handleClearCart}>Clear Cart</button></div>
    {cartItems.length === 0 && <h1 className="p-4 m-4 font-bold">Cart is empty please add items to the cart !</h1>}
        <ItemList items={cartItems}/>
    </div>
    </div>
};


export default Cart;