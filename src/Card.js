import React from 'react';
import './Card.css'
import './App.css'

const Card = (props) => {
    const{ movieName, description, img, wiki, imdb } = props; 
    return (
        <div className=' br2 pa3 ma2 bw2 shadow-5 amazing'>
            <a href= {`${wiki}`} target="_blank" rel="noopener noreferrer" ><img className='grow shadow-hover bw2 shadow-5'
             src= {`${img}`} target="_blank" alt='movie title'></img></a>
            <div className='br2 pa2 ma2 amazing1'>
            <h2>{movieName}</h2>
            <p>{description}</p>
            <br></br>
            <a href={`${imdb}`} target='_blank' rel="noopener noreferrer" className="button">IMDb</a>
            </div>
        </div>
    );
}


// className='grow shadow-hover dib br0 pa1 ma2 bg-animate bw2 shadow-5'

export default Card;