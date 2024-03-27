import React ,{useState} from 'react';

function Updatearry(){
    
    const[cars,setCars] =useState([])
    const[caryear,setcaryear]=useState(new Date().getFullYear());
    const[carMake,setcarmake]=useState("");
    const[carmodel,setcarmodel]=useState("");


    function handleAddcar(){
        const newCar = {year:caryear,make:carMake,module:carmodel};
        setCars(c=>[...c,newCar]);
        setcaryear(new Date().getFullYear());
        setcarmake("");
        setcarmodel("");

    }

    function handleYearChange(e){
        setcaryear(e.target.value);
    }

    function handleremovecar(index){

       setCars(c => c.filter((_,i)  => i !==index))
    }

    function handleCarMake(e){
        setcarmake(e.target.value);
    }

    function handleCarModel(e){
        setcarmodel(e.target.value);
    }


    
    return(<>
        <h2>list of the car</h2>
        <ul>
            {cars.map((car,index)=>
            <li key={index} onClick={()=>handleremovecar(index)}>
                {car.year} 
                {car.module} 
                {car.make}
            </li>
            )}
        </ul>
        <input type="number" value={caryear} onChange={handleYearChange} /><br />
        <input type="text" value={carMake} onChange={handleCarMake}placeholder='enter the car make' /><br />
        <input type="text" value={carmodel} onChange={handleCarModel}placeholder='enter the car model' /><br />
        <button onClick={handleAddcar}>Addcar</button>
    </>
    );
}
export default Updatearry