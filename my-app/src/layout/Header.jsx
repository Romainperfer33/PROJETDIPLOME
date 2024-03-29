import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

    const auth = localStorage.getItem('userRole')
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/')
    }
    return(
        <div className="bgcolor">
        <div className="img">
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
                        <Link to="/" className="link">HOME</Link>
                        </li>
                        <li className="navlink">
                            <Link to="/stages" className="link">STAGE</Link>
                        </li>
                        <li className="navlink">
                           {auth ? <Link onClick={logout} to="/" className="link">LOGOUT</Link> :
                            <Link to="/login" className="link">LOGIN</Link>}
                        </li>
                        {!auth && (
                        <li className="navlink">
                            <Link to="/inscription" className="link">INSCRIPTION</Link>
                        </li>
            )}
                    </ul>
                </nav>
            </div>
            </div>
            <div>
                <h2>TECHNO FOR ALL</h2>
                <p className="smcontainer"> by Romain Mesama</p>
            </div>
        </div>
    )
}

export default Header