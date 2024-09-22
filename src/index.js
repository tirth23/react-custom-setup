import React from 'react';
import ReactDOM from 'react-dom/client';

// const child1 = React.createElement("p", {}, "Im 1stChild");
// const child2 = React.createElement("p", {}, "Im 2ndChild");
// const div = React.createElement("p", { className: "text" }, [child1, child2]);
// console.log(div);

const isMorning = true;
const morningText = 'Good Morning';
const eveningText = 'Good Evening';

const morningElement = <p>{morningText} it is 8AM</p>;
const eveningElement = <p>{eveningText} it is 8PM</p>;

const greetingElement = isMorning ? morningElement : eveningElement;

const GreetingComponent1 = function (props) {
  return <>{greetingElement} {props} I am component</>;
};

const GreetingComponent2 = function () {
  return <>{greetingElement} I am component</>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(React Element Object)
// root.render(GreetingComponent1("tirth"));
root.render(<GreetingComponent2 />);
