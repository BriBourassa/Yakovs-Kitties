import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/cat-sketch.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCat} />
              <span className="link-text">Adoptable Cats</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCat} />
              <span className="link-text">About us</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCat} />
              <span className="link-text">Lost & Found</span>
            </a>
          </li>

        </ul>
      </nav>

      {/* <img src=""/> */}
    </>
  );
};

export default Navbar;
