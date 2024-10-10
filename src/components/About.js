import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is a Food App</h2>
            <User name={"Amisha Kulkarni (function)"}/>

            <UserClass name={"Amisha Kulkarni (class)"} location={"Mumbai Class"}/>
        </div>
    );
};

export default About;