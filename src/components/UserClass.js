import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);

        // this.state is a big object which contains all the state variables
        this.state = {
            count: 0,
            count2: 2,
        };
    }

    render() {
        const {name, location} = this.props
        const {count, count2} = this.state
        return (
        <div className="user-card">
        <h2>Count = {count}</h2>
        <h2>Count2 = {count2}</h2>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: amishakulkarni.com@gmail.com</h2>
    </div>
        );
    }
}

export default UserClass;