function clickevent(){
    // const handleclick =()=>console.log("OUCH!");
    let count = 0;
    

    // const handleclick2 =(name) => {
    //     if(count < 3){
    //     count++;
    //     console.log( `${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //     console.log( `${name} stop clicking me!`);
    //     }
    // };


    // return(
    //     <button onClick={() => handleclick2("Bro")}>click me</button>
    // );




    const handleclick = (e) => e.target.style.display = "none"

    
    return(
            <button onClick={(e)=>handleclick(e)}>click me</button>

    );






}

export default clickevent