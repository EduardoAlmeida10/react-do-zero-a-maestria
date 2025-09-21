import { NavLink } from "react-router-dom"
import { items } from "./items"

import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>
            <ul className={styles.links_list}>
                {items.map(item => (
                    <li key={item.id}>
                        <NavLink to={item.link} className={({ isActive }) => (isActive ? styles.active : "")}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar