import react ,{useState} from 'react';
function ColourPicker (){


    const [color,setColor] = useState("#FFFFFFF")

    function handelSetColor (event){
        setColor(event.target.value)
    }

   

    return(<div className='colour_picker_comtainer'>
        <h1>color Picker</h1>

        <div className="color_picker_box" style={{background:color}}>
            <p>selected colour : {color}</p>
        </div>

        <label htmlFor="">
            select Color:
        </label>
        <input type="color" value={color} onChange={handelSetColor} />


    </div>);
};

export default  ColourPicker