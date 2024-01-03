
const heading = React.createElement("h1",{id : "heading"},"Hello From React");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// div inside another div

/*
<div id ="parent>
<div id="child">
<h1>Hello react</h1>
</div>
</div>

*/

const parents= React.createElement(
    "div",{id:"parent"},[React.createElement(
        "div",{id:"child"},[React.createElement(
            "h1",{},"Hello from child Div")
         ])],

React.createElement(
    "div",{id:"child2"cd },[React.createElement(
        "h1",{},"Hello from child Div")
     ])
     );

console.log(parents);
root.render(parents);

