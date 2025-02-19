// import User from "./User";
// import UserClass from "./UserClass";
// import {Component} from "react";

// class About extends Component {

//     constructor(props) {
//         super(props);

//         //console.log("Parent Constructor")
//     }

//     componentDidMount() {
//         //console.log("Parent Component Did Mount")
//     }

//     render() {

//         //console.log("Parent Render")
//         return (
//             <div className="p-8 m-8 text-center py-20">
//     {/* <h1>About Class Component</h1> */}
//     <h2 className="text-4xl font-semibold">This is a Food App</h2>
//     <h2 className="text-2xl mt-4">For more details contact the developer of this application : amishakulkarni.com@gmail.com</h2>
//     <p className="text-black text-lg mt-4">
//         Check out my work on :  
//         <a 
//             href="https://github.com/Amishakul" 
//             className="text-blue-300 hover:text-blue-500 transition-colors duration-300 text-lg font-semibold p-2"
//         >
//             GitHub
//         </a>
//     </p>

//             {/* <User name={"Amisha Kulkarni (function)"}/> */}

//             {/* <UserClass name={"First"} location={"Mumbai Class"}/> */}
//             {/* <UserClass/> */}


//             {/* <UserClass name={"Second"} location={"USA"}/>
//             <UserClass name={"Third"} location={"USA"}/> */}
//         </div>

//         );
//     }
// }








// Function Based Component

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is a Food App</h2>
//             {/* <User name={"Amisha Kulkarni (function)"}/> */}

//             <UserClass name={"Amisha Kulkarni (class)"} location={"Mumbai Class"}/>
//         </div>
//     );
// };



import React from "react";
import burger from "../Utils/burger.png"

const About = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 bg-white">
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold mb-6 hover:bg-orange-600" onClick={() => window.location.href = "https://github.com/Amishakul"}>
        Show My Profile
      </button>
      <h1 className="text-4xl font-bold text-gray-800">Welcome to</h1>
      <h2 className="text-4xl font-bold text-gray-800">The world of</h2>
      <div className="bg-orange-500 text-white px-4 py-2 rounded-md text-3xl font-semibold mt-2">
        Tasty & Fresh Food
      </div>
      <p className="text-gray-600 italic text-lg mt-4">
        "Better you will feel if you eat a <span className="text-orange-500 font-semibold">Namaste Food</span> healthy meal"
      </p>
      <img
        src={burger}
        alt="Tasty Burger"
        className="mt-6 w-80 h-auto"
      />
    </div>
  );
};




export default About;