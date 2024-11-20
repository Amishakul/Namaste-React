import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; // Font Awesome cart icon


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render")

    const onlineStatus = useOnlineStatus(); // custom hook

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser); // context hook


    // Selector -> it is a hook, useselector hook -> it gives access to the store. Subscribing to the store using a Selector i.e. reading the data from the store.
    // Whenever my store items will modify my cartItems will also get modify.
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    useEffect(() => {
        console.log("useEffect called")
    }, [btnNameReact]);

    return (
        <div className="bg-white shadow-lg rounded-lg m-4 p-4 transition-all duration-300 ease-in-out hover:shadow-2xl">

        {/* <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50"> */}

        <div className="flex justify-between items-center container mx-auto">

            <div className="logo-container flex items-center justify-start">
                <img className="w-36 sm:w-40 rounded-lg item" src={LOGO_URL} />
            </div>


            <div className="flex items-center space-x-6">
                <ul className="flex space-x-6 text-lg font-semibold text-gray-800">
                    <li className="flex items-center space-x-2">
                    <span className={`inline-block ${onlineStatus ? 'text-green-500' : 'text-red-500'}`}>
                    {onlineStatus ? "🟢" : "🔴"}
                    </span>
                    <span>Online Status</span>
                    </li>
                            
                    <li className="hover:text-blue-600 transition-colors duration-300"><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About Us</a></li> */}
                    <li className="hover:text-blue-600 transition-colors duration-300"><Link to="/about"> About Us</Link></li>
                    <li className="hover:text-blue-600 transition-colors duration-300"><Link to="/contact">Contact Us</Link></li>
                    <li className="hover:text-blue-600 transition-colors duration-300"><Link to="/grocery">Grocery</Link></li>

                    <li className="flex items-center space-x-1">
                    <Link to="/cart" className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300"> 
                    <FaShoppingCart />
                    
                    <span>Cart -  ({cartItems.length} items)</span>
                    </Link>
                    </li>
                    </ul>
                    

                    <div className="flex items-center space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button> 

                    <span className="text-gray-800 font-semibold">{loggedInUser}</span>
                
            </div>
        </div>
        </div>
        </div>
    )

};

export default Header;

