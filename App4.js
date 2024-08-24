import React from "react";
import ReactDOM from "react-dom/client";

// Components present in food App:
// 1. Header: Logo, Nav Items
// 2. Body: Search, RestaurantContainer which has Restaurant Card which further has -> Img, Name of Res, Star rating, cuisine, delivery time
// 3. Footer: Copyright, Links, Address, Contact


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )

};

// const styleCard = {
//     backgroundColor: "#f0f0f0",
// };

const RestaurantCard = () => {
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
        <img className="res-logo"
        alt="res-logo" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"/>
        
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 Stars</h4>
        <h4>38 Mintues</h4>
        </div>
    );
};


const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
            <RestaurantCard />

            </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className="app">
        <Header />
        <Body />
        
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);