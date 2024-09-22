import React from "react";
import ReactDOM from "react-dom";

const child1 = React.createElement("p", {}, "Im 1stChild");
const child2 = React.createElement("p", {}, "Im 2ndChild");
const div = React.createElement("p", { className: "text" }, [child1, child2]);
// const div = <div className="text">JSX Synatx</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

