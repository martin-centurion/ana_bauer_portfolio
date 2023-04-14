import React from 'react';
import Logo from '../Logo/Logo';
import './styles.css';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='header'>
        <div className='header__content container'>
          <Link to={"/"}>
              <Logo />
          </Link>
          <NavBarMenu />
        </div>
    </div>
  )
}

export default NavBar;