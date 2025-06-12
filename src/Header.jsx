import React, {useState, useEffect} from "react";
import menu from "./assets/drk-menu.png";
import close from "./assets/close.png";
import lightMenu from "./assets/lightMenu.png";
import lightClose from "./assets/lightClose.png";
import geoGoLogo from "./assets/GeoGoLogo.png";
import sun from "./assets/sun.png";

function Header() {
    const [IS_MENU_OPEN, setIsMenuOpen] = useState(false);
    const [DARK_MODE, setDarkMode] = useState(() => {
        const STORED_THEME = localStorage.getItem("theme");
        return STORED_THEME === "light";
    });

    const TOGGLE_MENU = () => setIsMenuOpen(!IS_MENU_OPEN);
    const TOGGLE_THEME = () => setDarkMode(prevMode => !prevMode);

    const TOGGLE_THEME_AND_CLOSE_MENU = () => {
        TOGGLE_THEME();
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (DARK_MODE) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "dark");
        }
    }, [DARK_MODE]);

    const MENU_ICON_SRC = () => {
        if (IS_MENU_OPEN) {
            return DARK_MODE ? lightClose : close;
        } else {
            return DARK_MODE ? lightMenu : menu;
        }
    };

    return (
        <>
            <header className="header">
                <div id="navbar-container">
                    <div id="logo-container">
                        <img id="earth-logo" src={geoGoLogo} alt="Earth"/>
                        <h3 id="geogo-logo">GeoGo</h3>
                    </div>
                    <img id="menu" src={MENU_ICON_SRC()}
                    alt={IS_MENU_OPEN ? "Close menu" : "Open menu"} draggable="false"
                    onClick={TOGGLE_MENU}/>
                    <nav>
                        <ul id="desktop-navbar">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#faq">FaQ</a></li>
                            <li><a href="#misc">Misc</a></li>
                            <img className="theme-sun" src={sun} alt="Toggle Theme Sun"
                            onClick={TOGGLE_THEME} draggable="false"/>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className={`mobile-menu ${IS_MENU_OPEN ? "open" : ""}`}>
                <nav>
                    <ul>
                        <li onClick={TOGGLE_MENU}><a href="#home">Home</a></li>
                        <li onClick={TOGGLE_MENU}><a href="#gallery">Gallery</a></li>
                        <li onClick={TOGGLE_MENU}><a href="#faq">FaQ</a></li>
                        <li onClick={TOGGLE_MENU}><a href="#misc">Misc</a></li>
                        <div id="mobile-menu-bar"></div>
                        <img className="theme-sun" src={sun} alt="Toggle Theme Sun"
                        onClick={TOGGLE_THEME_AND_CLOSE_MENU} draggable="false"/>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
