
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {

    const location = useLocation();
    return (
        <ul className="navigation">
            <li>
                <NavLink to="/" className={({isActive}) => {
                  return
                    isActive ? "active" : ""
                }}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => {
                   return isActive ? "active" : ""
                }}>About</NavLink>
            </li>
            <li>
                <NavLink to="/practices" className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>Practices</NavLink>
            </li>
            <li>
                <NavLink to="/lawyers" className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>Our Lawyers</NavLink>
            </li>
            <li>
                <NavLink to="/news" className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>News</NavLink>
                <div>
                    <NavLink to="/news/new" className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>Add News Item</NavLink>
                </div>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>Contact Requests</NavLink>
            </li>
            <li>
                    <NavLink to={`/auth?mode=login&redirect=${location.pathname}`} className={({isActive}) => {
                    return isActive ? "active" : ""
                }}>Login</NavLink>
            </li>
        </ul>

    );
}

export default Navigation;