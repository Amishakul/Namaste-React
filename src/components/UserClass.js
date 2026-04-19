import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // console.log(props);

        // this.state is a big object which contains all the state variables
        this.state = {
            // count: 0,

            userInfo: {
                name: "Dummy",
                location: "Default",
                //avatar_url: "https://Dummy-photo"

            }
        };
        //console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount() {
        //console.log(this.props.name + "Child Component Did Mount")

        // API call

        const data = await fetch ("https://api.github.com/users/Amishakul");

        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    // componentDidMount() {
    //     // this.timer = setInterval(() => {
    //         console.log("Amisha Kulkarni")
    //     // }, 1000);
    // }

    componentDidUpdate() {
        console.log("Component did update")
    }

    componentWillUnmount(){
        //clearInterval(this.timer);
        console.log("Component will unmount")
    }


    render() {
        // Destructuring
        //const {name, location} = this.props;
        //const {count} = this.state;

        const {name, location, avatar_url
        } = this.state.userInfo;
        //console.log(this.props.name + "Child Render")

        return (
        <div className="user-card py-4">
        {/* <h2>Count = {count}</h2>
        <button onClick={() => {

            // NEVER UPDATED STATE VARIABLES DIRECTLY

            this.setState({
                count: this.state.count + 1,
            });

        }}>Count Increase</button> */}

        {/* <h2>Count2 = {count2}</h2> */}

        <img className="mx-auto w-32 h-32 rounded-full" src={avatar_url}/>
        <h2 className="py-4">Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: amishakulkarni.com@gmail.com</h2>
    </div>
        );
    }
}

export default UserClass;