import { NavLink } from "react-router";

export default function MainNav() {
    return (<nav className="main-nav">
                <menu className="main-menu">
                    <li className="main-menu-items">
                        <NavLink to="/">
                            Accueil
                        </NavLink>
                    </li>
                </menu>
            </nav>);
}