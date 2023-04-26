// import react from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar(){
    return(
        <nav>
        <h1 className="title">Travel Destination</h1>
        <ul className="nav-links">
        <li><Link to="/" className='a'>Home</Link></li>
        <li><Link to="/" className='a'>About</Link></li>
        </ul>
        </nav>
    )
    
}

export default Navbar;