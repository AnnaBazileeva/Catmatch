import React, {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import styles from "../styles/Header.module.css";
import catlogo from "../assets/catlogo.png"


const Header = () => {
    const location = useLocation();
    const [title, setTitle] = useState("");

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setTitle("Cat match");
                break;
            case "/about":
                setTitle("About");
                break;
            default:
                setTitle("Not Found");
        }
    }, [location]);

    return (
        <header className={styles.header}>
            <div className={styles.logoTitle}>
                <img src={catlogo} alt="Logo" className={styles.catlogo}/>
            </div>
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({isActive}) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;