import proptypes from "prop-types";
// conditional rendering = allows you to control what gets rendered
// in your application based on certain conditions
// (show, hide, or change components)
function UserGreeting (props){
   if(props.isLogin){
      return <h2 className="login">welcome {props.username}</h2>;
   }
   else{
     return <h2 className="logout">please log in to continue</h2>
   }
//    or we can write like this...
// return(props.isLoggedIn? <h2>Welcome {props.username}</h2>:
// <h2>Please log in to continue</h2>); 


// or we can writ like this...
// function UserGreeting (props){
//     const object1 = <h2 className="login">
//                            Welcome {props.username}
//                             </h2>

//     const object2 = <h2 className="logout">
//                         Please log in to continue
//                         </h2>
//     return(props.isLogged  ? object1 : object2);
//     }
}

UserGreeting.PropTypes ={
    isLogin:proptypes.bool,
    username:proptypes.string,
}
UserGreeting.defaltprops={
    isLogin:false,
    username:"Guest",
}

export default UserGreeting