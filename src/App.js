// import React from 'react';
// import './App.css';
// import Counter from './components/Counter';
// import { useState } from 'react';
// function App() {
//   const [toggle, setToggle] = useState(false);
//   const handleToggle = () => setToggle(toggle => !toggle);
//   const counterList = [
//     {id: "A", name: "Counter A"},
//     {id: "B", name: "Counter B"},
//     {id: "C", name: "Counter C"}
//   ]
//   const filteredList = counterList.filter((value, ind) => {
//     return ind !== 1 || showB;
//   });
//   return (
//   <>
//      <button onClick={handleToggle}>Toggle Counter B visibility</button>
//      {filteredList.map(obj => <Counter name={obj.name} key={obj.id} />)}
//     {/* <Counter/>; */}

//   </>)
// }

// export default App;




import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const counterList = [
  {id: 'A', name: "Counter A"},
  {id: 'B', name: "Counter B"},
  {id: 'C', name: "Counter C"},
];

function App() {
  const [showB, setShowB] = useState(true);
  const handleToggle = () => setShowB(val => !val);
  const filteredList = counterList.filter((value, ind) => {
    return ind !== 1 || showB;
  });
  return <>
    <button onClick={handleToggle}>Toggle Counter B visibility</button>
    {filteredList.map(obj => <Counter name={obj.name} key={obj.id} />)}
  </>;
}

export default App;
