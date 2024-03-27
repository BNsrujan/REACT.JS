// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes


import React, {useState} from 'react';


function MyComponent() {
    const [name,setName] =useState("Guest")
    const [Qty,setQty] = useState(1)
    const [payment, setPayment] = useState("");
    const [comment,setComment] =useState ("")
    const [shipping,setshipping] = useState("")

    function comments(et) {
        setComment(et.target.value1);
        return(document.removeEventListener(comment))
    }

function handleNameChange(event){
    setName(event.target.value);
}
function QtySetter(e){
    setQty(e.target.value)
}

function PaymentChange(event){
setPayment (event.target.value);
}
    function changeShiping (e){
        setshipping(e.target.value)
    }
    return (
    <>
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name:{name}</p>

            <input value={Qty} onChange={QtySetter} type='number' />
            <p>Quantity:{Qty}</p>

            
        </div>
        <input  value1={comment} onChange={comments} placeholder='instructions' />
            <p>comment : {comment}</p>

            <select value={payment} onChange={ PaymentChange} >
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>    

        <label htmlFor=""> 
        <input type="radio" value="pick up" checked = {shipping === "pick up"} onChange={changeShiping}/>
            pick up
        </label>

        <label htmlFor="">
        <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={changeShiping}/>
            Delivery
        </label>
        <p>shipping :{shipping}</p>
        
    </>
    );
}
export default MyComponent