const heading2 = React.createElement(
    "div", {id:"root"},
[React.createElement(
    "div", {id:"child"},
    [
    React.createElement("h1",{id:"head"},"I am head" ),
    React.createElement("p",{id:"para"},"I am para"),
    ]
),
     React.createElement(
    "div", {id:"child"},
    [
    React.createElement("h1",{id:"head"},"I am head" ),
    React.createElement("p",{id:"para"},"I am para"),
    ]
)]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading2); 
console.log(heading2);

{/* <div id="root">
    <div id="child-1">
        <h1 id="head">I am head</h1>
        <p id="para">I am para</p>
    </div>
    <div id="child-2">
        <h1 id="head">I am head</h1>
        <p id="para">I am para</p>
    </div>
</div> */}