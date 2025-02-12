import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-container">
          <img src="/path-to-logo/logo.png" alt="Santhosh Yarns Logo" className="logo" />
        </div>
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/threads" className="nav-item">Threads</Link>
          <Link to="/place-order" className="nav-item">Place Order</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <button className="login-button">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
