import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render")

    const onlineStatus = useOnlineStatus(); // custom hook

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser); // context hook

    useEffect(() => {
        console.log("useEffect called")
    }, [btnNameReact]);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢": "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About Us</a></li> */}
                    <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login px-4" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button> 
<li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )

};

export default Header;

