import Header from "./Header"
import Food from "./Food"
import Card from "./Card"
import Footer from "./Footer"
import Student from "./Props"
import UserGreeting from "./conditional-redering"
import List from "./list"
// import Button from "./Btn/Button.jsx"
// HOW TO STYLE REACT COMPONENTS WITH CSS
//
// (not including external frameworks or preprocessors)
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE
// import Button from "./Btn/Button"
function App() {
      return(
        <>
         <Header/> 
         <Food/>
         <Card/>
         <Card/>
         <Card/>
         <Food/>
        <Footer></Footer>
        <Student name="Spongebob" age="30" isStudent={true}/>
        <Student name="srujan" age={19} isStudent={true}/>
        <Student name="ananth" age={10} isStudent={false}/>
        <Student name="monkey"/>
        {/* <Button/> */}
        <UserGreeting isLogin={true} username="srujan"/>
        <UserGreeting/>
        <List/>
        </>
      );
}

export default App
