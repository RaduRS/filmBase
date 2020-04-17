import React from 'react';
import Card from './Card';

const CardList = ({movieList}) => {

    return (
        <div>
            {
                movieList.map((user, i) => {
                    return (<Card 
                    key = {i}
                    movieName={movieList[i].movieName} 
                    description = {movieList[i].description} 
                    img = {movieList[i].img}
                    wiki = {movieList[i].wiki} 
                    imdb = {movieList[i].imdb}
                    />)
                })
            }
        </div>
    )
}

export default CardList;