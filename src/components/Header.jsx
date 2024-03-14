import { Link, NavLink } from "react-router-dom";
import imageUrl from "/public/avatar-icon.png";
import logoutImageUrl from "/public/logout.webp";


export default function Header() {
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

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
                <Link to="login" className="login-link">
                    <img src={imageUrl} className="login-icon" alt="Login icon" />
                </Link>
                <Link className="login-link" onClick={fakeLogOut}>
                    <img src={logoutImageUrl} className="login-icon" alt="Logout icon" />
                </Link>
            </nav>
        </header>
    )
}