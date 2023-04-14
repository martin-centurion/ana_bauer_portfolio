import React from 'react';

function PhotoList( { photos }) {
  return (
    <div>
        {photos.map((photo) => (
            <div className='photo' key={photo.id}>
                <h2>{photo.title}</h2>
                <img src={photo.img} alt={photo.title} />
                <p>{photo.description}</p>
            </div>
        ))}
    </div>
  )
}

export default PhotoList;