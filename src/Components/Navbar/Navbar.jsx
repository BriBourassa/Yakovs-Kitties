import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faHandHoldingHeart,
  faCircleInfo,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/cat-sketch.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav role="navigation" className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navbar-ul">
          <li className="nav-item">
            <NavLink to="/adopt" className="nav-link adopt">
              <FontAwesomeIcon icon={faCat} />
              <span className="link-text">Adoptable Cats</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link about">
              <FontAwesomeIcon icon={faCircleInfo} />
              <span className="link-text">About us</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/lost-and-found" className="nav-link lost">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="link-text">Lost & Found</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donate" className="nav-link donate">
              <FontAwesomeIcon icon={faHandHoldingHeart} />
              <span className="link-text ">Donate </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
