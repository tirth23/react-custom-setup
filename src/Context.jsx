import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

const UserContext = createContext();

export const Component1 = () => {
  const [user, setUser] = useState('Jesse Hall');
  console.log("component 1 rendered");
  return (
    <UserContext.Provider value={{user, setUser}}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  console.log("component 2 rendered");
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const [check, setCheck] = useState(0);
  console.log("component 3 rendered");
  return (
    <>
      <h1 onClick={() => setCheck(check + 1)}>Component 3</h1>
      {check}
      <Component4 />
    </>
  );
}

function Component4() {
  console.log("component 4 rendered");
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

export const Component5 = () => {
  const {user, setUser} = useContext(UserContext);
  console.log("component 5 rendered");
  return (
    <>
      <h1 onClick={() => setUser('lode')}>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
