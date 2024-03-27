import Rect,{useEffect,useState} from "react"

function HightWideth(){
    const[Height,setHight]=useState(window.innerHeight);
    const[Width,setWiedth]=useState(window.innerWidth)

    function handleRezie(){
        setWiedth(window.innerHeight)
        setHight(window.innerWidth)
    }
    return(
    <>
    <p onChange={handleRezie}>Window Width: {Width}px</p>
    <p onChange={handleRezie}>Window Hight : {Height}px</p>
    </>
    );
}
export default HightWideth