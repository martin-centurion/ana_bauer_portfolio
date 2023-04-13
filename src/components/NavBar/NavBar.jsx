import React from 'react';
import Logo from '../Logo/Logo';
import './styles.css';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='header container'>
        <Link to={"/"}>
            <Logo />
        </Link>
        <NavBarMenu />
    </div>
  )
}

export default NavBar;