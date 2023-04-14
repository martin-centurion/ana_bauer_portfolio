import React from 'react';
import PhotoCategory from '../PhotoCategory/PhotoCategory';
import './styles.css';

function PhotoCategoryContent() {
  return (
    <div className='category'>
        
        <PhotoCategory 
            onTouchButton={'/category/fotodigital'} 
            imgCategory={'https://i.ibb.co/bFCTqyg/13.png'}
            nameCategory={'Fotografia Digital'}
        />

        <PhotoCategory 
            onTouchButton={'/category/videos'} 
            imgCategory={'https://i.ibb.co/d7TftLW/5.png'}
            nameCategory={'Videos'}
        />

        <PhotoCategory 
            onTouchButton={'/category/publicaciones'} 
            imgCategory={'https://i.ibb.co/5skMLvF/1.png'}
            nameCategory={'Publicaciones'}
        />

        <PhotoCategory 
            onTouchButton={'/category/foto35mm'} 
            imgCategory={'https://i.ibb.co/y4zDpKS/9.png'}
            nameCategory={'Foto 35mm'}
        />
        
    </div>
  )
}

export default PhotoCategoryContent;


