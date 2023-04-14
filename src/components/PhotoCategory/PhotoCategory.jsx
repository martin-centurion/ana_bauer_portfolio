import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function PhotoCategory(props) {
  return (
        <div className='photo'>
            <Link to={props.onTouchButton}>
            <div className='photo__cover'>
                <h1>{props.nameCategory}</h1>
            </div>
            <img className='img-cont' src={props.imgCategory}/>
            </Link>
        </div>
  )
}

export default PhotoCategory;

{/* 
        <div className='img-container'>
            <div className='covers'>
                <h2>{datos.titulo}</h2>
            </div>
            <img className='img-cont ' src='https://i.imgur.com/pY4MTXq.jpg' alt='foto'></img>
        </div> */}