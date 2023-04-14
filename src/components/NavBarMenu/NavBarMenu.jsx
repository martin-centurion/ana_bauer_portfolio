import React from 'react';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
function NavBarMenu() {
  return (
    <nav>   
            <ButtonNavigation onTouchButton={'/aboutme'}>
                    About me
            </ButtonNavigation>
            <ButtonNavigation onTouchButton={'/contact'}>
                    Contact
            </ButtonNavigation>
    </nav>
  )
}

export default NavBarMenu;