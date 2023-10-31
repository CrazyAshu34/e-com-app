import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'; // Example of importing the user icon
import logo from "../images/logo.png";
import "./Navbar.css";
export const Navbar = () => {
    return (
        <div className="mynavbar">
            <div className="box_1">
                <ul className="myul_1">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/Men">Men</Link></li>
                    <li><Link to="/Women">Women</Link></li>
                    <li><Link to="/Kids" className="last_Li">Kids</Link></li>
                </ul>
            </div>
            <div className="nav-icons">
                <img className="logo" src={logo} alt="logo" />
                <button className="btn"><Link to="/Login">Login</Link></button>
                <div className="cart"><Link to="/Cart"><FontAwesomeIcon icon={faCartArrowDown} /></Link></div>
            </div>
        </div>
    );
};