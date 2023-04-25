import { useState } from "react";
import './navbar.css'

const NavBar = () => {

    // pour changer les burger class

    const [burger_class, setBugerClass] = useState ("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState ("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState (false)

    // pour changer les toggle burger menu au onclick
    const handleclick = () => {
        if (!isMenuClicked) {
             setBugerClass ("burger-bar clicked")
             setMenuClass ("menu visible")
        }
        else
        {
            setBugerClass ("burger-bar unclicked")
            setMenuClass ("menu hidden")
        }
    }

    return (
        <div style = {{ width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu">
                    <div className={burger_class} onClick={handleclick}></div>
                    <div className={burger_class} onClick={handleclick}></div>
                    <div className={burger_class} onClick={handleclick}></div>
                </div>
                <div className={menu_class}></div>
            </nav>
        </div>
    )

}
export default NavBar