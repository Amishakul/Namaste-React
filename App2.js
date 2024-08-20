// const parent = React.createElement(
//     "div", 
//     {id: "parent"}, 
//     React.createElement(
//         "div", 
//         {id: "child"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"), 
//         React.createElement("h2", {}, "I'm an h2 tag"),]
//     )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement(
        "div", 
        {id: "child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag"),]
    ), 
    React.createElement(
        "div", 
        {id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag"),]
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);

// ReactElement(Object) which gets convert into HTML(which browser understands)

// here I'm an h1 tag is children, parent, child are attributes to tag div and together these are all called props