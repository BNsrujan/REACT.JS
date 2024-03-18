import foodpic from "./assets/yo!.png"

function Card(){
    
    return(
        
        <div className="card">
        <img src={foodpic} alt="food photo" />
        <h2>Yo!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, unde illo quaerat eveniet eum officia, velit quos possimus, esse veritatis dicta. Natus optio quibusdam itaque, nulla earum ea eum saepe!</p>
        
       </div>
      
    );

}

export default Card