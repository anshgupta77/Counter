import React, { useEffect, useState } from 'react';
import backend from '../service/backend';
import './Counter.css';

function Counter({name}) {
  const sendMessage = () =>backend.ping("Hello");
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  useEffect(() => {
    backend.connect(name);
    return () => backend.disconnect(name);
  },[name]);

  return (
    <div>
        <div id="counter">{count}</div>
        <button onClick={increment}>Increment</button>
        <div>{name}</div>
        <button onClick={reset}>Reset</button>
        <button onCLick={sendMessage}>Say Hi!!</button>
        <div id="message">{count > 10 ? "Threshold crossed!" : ""}</div>
    </div>
  );
}

export default Counter;
