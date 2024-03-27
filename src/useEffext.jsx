import React,{useState,useEffect} from "react";
// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value
// useEffect(function, [dependencies])
// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes
// USES
// # 1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts
function useEffects(){
    
    const[count,newcount]=useState(0);
    const[color,newcolor] =useState("green");


    useEffect(()=>{document.title =`count :${count} ${color}`},[count] [color])
 // useEffect(_______________________________________,__)


    function addCount(){
       newcount(c => c + 1);
    }

    function subCount(){
        newcount(c => c - 1);
    }

    function changercolor(){
      newcolor(c => c==="green"?"red":"green")  
    }

    return(
    <>
    <h2 style={{color:color}}>Count : {count}</h2>
    <button onClick={addCount}> Add</button>
    <button onClick={subCount}>Subtract</button><br />

    <button onClick={changercolor}>Change color</button>
    </>
    );
}

export default useEffects