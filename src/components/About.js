import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {

    constructor(props) {
        super(props);

        //console.log("Parent Constructor")
    }

    componentDidMount() {
        //console.log("Parent Component Did Mount")
    }

    render() {

        //console.log("Parent Render")
        return (
            <div className="p-4 m-4 text-center">
            <h1>About Class Component</h1>
            <h2>This is a Food App</h2>
            {/* <User name={"Amisha Kulkarni (function)"}/> */}

            {/* <UserClass name={"First"} location={"Mumbai Class"}/> */}
            <UserClass/>


            {/* <UserClass name={"Second"} location={"USA"}/>
            <UserClass name={"Third"} location={"USA"}/> */}
        </div>

        );
    }
}








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

export default About;