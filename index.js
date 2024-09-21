// const root = document.getElementById("root");
// const p = document.createElement("p");
// p.innerText = "Hello World!";
// root.appendChild(p);

const child = React.createElement("p", {}, "Im Child");
const div = React.createElement("p", { className: "text" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);