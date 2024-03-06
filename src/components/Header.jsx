import { Component } from "react";
import { Link, NavLink } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <NavLink
                        to="/host"
                        className={({ isActive }) => isActive ? 'active-link' : ""}>
                        Host
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? 'active-link' : ""}>
                        About
                    </NavLink>
                    <NavLink
                        to="/vans"
                        className={({ isActive }) => isActive ? 'active-link' : ""}>
                        Vans
                    </NavLink>
                </nav>
            </header>
        )
    }
}