import { NavLink } from 'react-router-dom';
import logo from '../Header/Picture1.jpg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="SY Logo" />
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ABOUT</NavLink>
        <NavLink to="/thread-details" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>THREAD DETAILS</NavLink>
        <NavLink to="/place-order" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>PLACE ORDER</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CONTACT INFO</NavLink>
      </nav>
      <button className="login-btn">LOGIN</button>
    </header>
  );
}

export default Header;
