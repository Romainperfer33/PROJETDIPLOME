import React, {useState} from "react";
import './header.css'

const Header = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="bgcolor">
        <div className="img" style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="logo">TFA</div>
                <div class="centered">
                    <h1>T<span>F</span>A </h1>
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <div className={menu_class}>
                <nav className="navbar">
                    <ul className="navlinks">
                        <li className="navlink">
                           <a href="/" className="link">STAGE</a>
                        </li>
                        <li className="navlink">
                            <a href="/" className="link">LOGIN</a>
                        </li>
                    </ul>
                </nav>
            </div>
                <h2>TECHNO FOR ALL</h2>
            </div>
        </div>
    )
}

export default Header