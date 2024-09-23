import React from "react";
import Button from "./Button.jsx";

const App = () => {
  const handleClickAction = () => {
    console.log("I am clicked from Parent");
  };
  return <Button clickAction={handleClickAction}>Click Me</Button>;
};

export default App;
