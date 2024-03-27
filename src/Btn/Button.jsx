
import styles from "./Button.css" 

function Button(){
    // 3. INLINE
       const style ={
        backgroundColor:"black",
        color:"white",
        padding:"10px 20px",
        borderRadius:"5px",
        cursor:"pointer",
       };
    return(
        <>
        <button className={styles.button}>yo! it's me</button>;
        <button style={style}>click me</button>;
        </>
    );
}
export default Button


