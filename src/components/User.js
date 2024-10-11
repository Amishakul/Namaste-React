import { useEffect, useState } from "react";


// const User = (props) => {
//     return <div className="user-card">
//         <h2>Name: {props.name} </h2>
//         <h2>Location: Mumbai</h2>
//         <h2>Contact: amishakulkarni.com@gmail.com</h2>
//     </div>
// }

// Destructuring of props: "Amisha Kulkarni (Function) is an arrgument passed to the function User as a props." name is parameter.
const User = ({name}) => {
    const [count, setCount] = useState(0);
    const[count2] = useState(1);

    useEffect(() => {
        // API Calls
    }, []);


    return <div className="user-card">
    {/* How to set state variable inside jsx */}
        <h2>Count = {count}</h2> 
        <h2>Count = {count2}</h2> 
        <h2>Name: {name} </h2>
        <h2>Location: Mumbai</h2>
        <h2>Contact: amishakulkarni.com@gmail.com</h2>
    </div>
}

export default User;