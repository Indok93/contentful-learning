import { NavLink } from "react-router-dom"
import styles from "../Navbar/Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navheader}>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="animals">Animals</NavLink></li>
            <li><NavLink to="celebrities">Celebrities</NavLink></li>
            <li><NavLink to="pokemon">Pokemon</NavLink></li>
            <li><NavLink to="digimon">Digimon</NavLink></li>
        </ul>
    </nav>
  )
}
