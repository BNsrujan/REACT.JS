// React hook = Special function that allows functional components
// to use React features without writing class components (React v16.8)
// (useState, use Effect, useContext, use Reducer, useCallback, and more...)


// useState() = A React hook that allows the creation of a stateful variable
// AND a setter function to update its value in the Virtual DOM.
// [name, setName]
import React,{useState} from "react";
function useStates() {
    const [name,setName] = useState("guest");
    const [age,setAge]= useState(0);
    const [isEmp,setisEmp] =useState(false);

    const updateName = () => {
        setName("new button");
    }
        
    const incrementAge = ()=>{
        setAge(age+1);
    }
    const decrementAge = ()=>{
        setAge(age-1);
    }

    const isornotEmp =()=>{
        setisEmp(!isEmp)
    }
    return(<>
        <div><p>Name:{name}</p>
        <button onClick={updateName}>button</button>
        </div>

        <div><p>Name:{age}</p>
        <button onClick={incrementAge}>incrementAge</button>
        </div>

        
        <button onClick={decrementAge}>incrementAge</button>
        
        <div><p>Empornot:{isEmp ? "yes":"no"}</p>
        <button onClick={isornotEmp}>isEmp</button>
        </div>
    </>);
}
    export default useStates