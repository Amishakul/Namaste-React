const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!"); // creating h1 tag.

console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root")); // rendering h1 tag inside root i.e. inside div tag

    root.render(heading);
    // {} -> an empty object is used to give attributes to a tag i.e. id, class
    // react.createElement i.e. an h1 tag in this case is an object in react
    // render is used to convert the object (react.createElement) into h1 tag