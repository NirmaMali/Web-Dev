

import { useState } from 'react'
export default function Counter() {

  function init(){
    console.log("init was executed");
    return Math.random() * 100;
  }


    let [count, setCount] = useState(init); //initialization 
    console.log("Component was rendered");
    let incCount= () =>{
        setCount((currCount) => { return currCount + 1 }); //updating state using callback function
        // setCount((currCount) => { return currCount + 1 }); //updating state using callback function
        
    }

  return(
    <>
    <h3>Count= {count}</h3>
    <button onClick={incCount}>Increment</button>
    </>
  )
}