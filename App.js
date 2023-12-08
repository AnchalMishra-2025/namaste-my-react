import React from "react";
import * as ReactDOM  from "react-dom";
const number = <span>{100}</span>

const Title=()=>{
    return (
        <div>
            <h1>Here we are going to perform Component composition by putting this Component indide App component.</h1>
            {/* Accessing number react element inside Title component that itself is react element.  */}
            {number} 
        </div>
    );
}
const App=()=>{
    return( <div>
    <h1>Functional Component</h1>
    {/* Accessing Title conponent inside Heading component   */}
    <Title />
    </div>
    );
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<App />); 
