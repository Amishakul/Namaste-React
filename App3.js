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

// const jsxHeading = <h1 id="heading">Namaste React in JSX 🚀</h1> // this is not html in js, this is jsx, jsx is an html/XML like syntax.
// const jsxHeading = <h1 className="head" tabIndex="1">Namaste React in JSX 🚀</h1>

// jsx in multiple lines

const jsxHeading = (<h1 className="head">
    Namaste React in JSX 🚀
</h1>)



console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //creating using jsx

// JSX (transpiled(transform into the way js engine can understand) before it reaches the JS Engine by parcel package and which is in turn done by Babel package)

// Babel -> converts the jsx code that js engine/browser/react can understand

// Babel is converting JSX code into React.createElement
// Babel is a js complier, it also converts code which old browsers can understand

// to give attributes in JSX we have to use camelcase






