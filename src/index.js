import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// // const child1 = React.createElement("p", {}, "Im 1stChild");
// // const child2 = React.createElement("p", {}, "Im 2ndChild");
// // const div = React.createElement("p", { className: "text" }, [child1, child2]);
// // console.log(div);

// const isMorning = true;
// const morningText = 'Good Morning';
// const eveningText = 'Good Evening';

// const handleClick = (state) => {
//   console.log('I am clicked ', state);
// };
// const morningElement = (
//   <p>
//     {morningText} <span onClick={() => handleClick(isMorning)}>it is 8AM</span>
//   </p>
// );
// const eveningElement = <p>{eveningText} it is 8PM</p>;

// const greetingElement = isMorning ? morningElement : eveningElement;

// const GreetingComponent1 = function (props) {
//   return (
//     <>
//       {greetingElement} {props} I am component
//     </>
//   );
// };

// const GreetingComponent2 = function () {
//   return <>{greetingElement} I am component</>;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// //root.render(React Element Object)
// // root.render(GreetingComponent1("tirth"));
// root.render(<GreetingComponent2 />);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
