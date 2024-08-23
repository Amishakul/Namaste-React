import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// React elements = dom elements in js

// React.createElement => Gives React Element(Object) => when we render this element to the dom it becomes an html-element

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀");

// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // creating using react






// JSX => Babel transplies it to React.createElement => Gives React Element(Object) => when we render this element to the dom it becomes an html-element

// JSX(merge js and html and form JSX)

// JSX is seperate and react is seperate

// JSX (transpiled(transform into the way js engine can understand) before it reaches the JS Engine by parcel package and which is in turn done by Babel package)

// Babel -> converts the jsx code that js engine/browser/react can understand

// Babel is converting JSX code into React.createElement
// Babel is a js complier, it also converts code which old browsers can understand

// to give attributes in JSX we have to use camelcase



// const jsxHeading = <h1 id="heading">Namaste React in JSX 🚀</h1> // this is not html in js, this is jsx, jsx is an html/XML like syntax.
// const jsxHeading = <h1 className="head" tabIndex="1">Namaste React in JSX 🚀</h1>

// jsx in multiple lines

// const jsxHeading = (<h1 className="head">
//     Namaste React in JSX 🚀
// </h1>)

// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); //creating using jsx

// React element
const heading = (<h1 className="head" tabIndex="5">
    Namaste React in JSX 🚀
</h1>)

// React element
// const hero = (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX 🚀
//     </h1>
// )



// React Component: Everything in react is a component (eg. navbar, button, footer, cart, etc)

// Class Based Component - OLD WAY
// Functional Component - NEW WAY

// React Functional Component: A function that returns a piece of jsx code or a react element

const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>
};


// Component Composition: Compositing 2 components into one another
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

// functional component using normal function

const Title2 = function(){
    return (
        <h1 className="head" tabIndex="5">
            Namaste React using JSX 🚀
        </h1>
    )
}

const number = 10000; //(writing javascript inside JSX)
const HeadingComponent2 = () => (
    <div id="container">
    <h1>{number}</h1>
    {/* <h2>{100 + 200}</h2>  */}
    {/* <h1>{console.log("fkdsjdasdo")}</h1> */}
    <Title />
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
);

const HeadingComponent3 = () => (
    <div id="container">
    {hero}
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
);


// rendering react element inside functional component
const HeadingComponent4 = () => (
    <div id="container">
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
);

const HeadingComponent5 = () => <h1>Namaste React Functional Component</h1>


// A react element inside react element

const elem = <span>React Element </span>

const hero = (
    <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🚀
    <HeadingComponent4 /> 
    </h1>
)

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//root.render(<HeadingComponent3 />) // rendering a functional component
root.render(hero); // rendering react element inside functional component





