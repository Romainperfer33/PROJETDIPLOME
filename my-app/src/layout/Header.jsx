import { useState } from "react";


const NavBar = () => {

    const [burger_class, setBurgerClass]= useState("burger-bar unclicked")
    const [menu_class, setMenuClass]= useState ("menu hidden")
    const [isMenuClicked, setIsMenuClicked]= useState (false)

    const handleClick = () => {
        if (!isMenuClicked) {
            setBurgerClass ("burger-bar clicked")
            setMenuClass ("menu visible")
        }
        else {
            setBurgerClass ("burger-bar unclicked")
            setMenuClass ("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
return (
 <header>
    <div className="logo">TFA</div>
    <div className="burgerMenu" onClick={handleClick}>
        <div className= {burger_class}></div>
        <div className= {burger_class}></div>
        <div className= {burger_class}></div>
    </div>
 </header>
)

}

export default NavBar