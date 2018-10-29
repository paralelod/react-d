import React from 'react';
import PropTypes from 'prop-types';
import  {nav,active} from './Nav.module.scss';
import logo from './d-logo.svg';
import {NavLink,Link, BrowserRouter} from 'react-router-dom';

const Nav = (props) => {
  return (
    // <BrowserRouter>
      <nav className={nav} role="navigation">
        <Link to="/" className="logo" aria-label="Main Page">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink 
              to="/home" 
              activeClassName={active}>
                Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login" 
              activeClassName={active}>
                Login
            </NavLink>
          </li>
          <li><a href="https://work.diogorusso.com" aria-label="Work">Work</a></li>
          <li><a href="https://www.linkedin.com/in/diogorusso/?locale=en_US" target="_blank" rel="noopener" aria-label="Linkedin">L</a></li>
        </ul>
      </nav>
  // </BrowserRouter>
  );
};
export default Nav;