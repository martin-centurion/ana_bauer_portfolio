import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function ButtonNavigation(props) {
  return (
        <Link to={props.onTouchButton}>
            <button>
                {props.children}
            </button>
        </Link>
  )
}

export default ButtonNavigation;