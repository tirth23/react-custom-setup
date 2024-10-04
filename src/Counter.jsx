import React, { useEffect, useState } from 'react';
import Button from './Button.jsx';

const Counter = () => {
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    console.log('I am effect');
    return () => {
      console.log('I am cleanup from empty dependency');
    };
  }, []);

  useEffect(() => {
    console.log('I am effect 2');
    return () => {
      console.log('I am cleanup from update dependency');
    };
  }, [update]);

  const handleClickAction = () => {
    setUpdate(update + 1);
  };

  return <Button clickAction={handleClickAction}>Click Me</Button>;
};

export default Counter;
