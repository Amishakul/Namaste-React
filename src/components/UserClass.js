import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);

        // this.state is a big object which contains all the state variables
        this.state = {
            count: 0,
        };
        console.log(this.props.name + "Child Constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount")

        // API call
    }


    render() {
        // Destructuring
        const {name, location} = this.props;
        const {count} = this.state;
        console.log(this.props.name + "Child Render")

        return (
        <div className="user-card">
        <h2>Count = {count}</h2>
        <button onClick={() => {

            // NEVER UPDATED STATE VARIABLES DIRECTLY

            this.setState({
                count: this.state.count + 1,
            });

        }}>Count Increase</button>

        {/* <h2>Count2 = {count2}</h2> */}
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: amishakulkarni.com@gmail.com</h2>
    </div>
        );
    }
}

export default UserClass;