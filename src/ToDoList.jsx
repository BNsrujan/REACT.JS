import React,{useState} from 'react'
function ToDoList(){
    const[Tasks,setTasks] =useState(["eat Brackfast","run a shower","drink water"]);
    const[newTask,setNewtask] =useState("");

    function handInputchange(e){
        setNewtask(e.target.value)
    }
    function handTaskUP(index){
        
        if(index > 0){
            const updatTast =[...Tasks];
            [updatTast[index],updatTast[index - 1]]=[updatTast[index -1],updatTast[index ]];
            setTasks(updatTast);
        }
    }

    function handTaskDown(index){
        if(index < Tasks.length -1){
           const updatTask = [...Tasks]
           [updatTask[index] ,updatTask[index + 1]]=[updatTask[index +1],updatTask[index]]
           setTasks(updatTask)
        }
    }
    function handDelete(index){
        const updatTask=Tasks.filter((_,i)=> i !==index);
        setTasks(updatTask);
    }

    function hanAddTask(){
     if(Tasks !== "") {
        setTasks(t =>[...t,newTask]);
        setNewtask("")
     }
    }  
    
    return(<>
        <input type="text" value={newTask} onChange={handInputchange} placeholder='Enter the Task ....' />
        <button onClick={hanAddTask}>Add</button><br />
        <ol>
            
            {Tasks.map((task,index)=>
            <li key={index}>
                <span>{task}</span>
                <button onClick= {()=>handDelete(index)}>delete</button>
                <button onClick= {()=>handTaskDown(index)}>Down</button>
                <button onChange= {()=>handTaskUP(index)}>Up</button>
            </li>
            )}
        
      
        </ol>
    </>)
}
export default ToDoList