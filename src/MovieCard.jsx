import React from 'react';

const MovieCard = (movie) => {
    return (
            <div className="movie">
                <h2>{movie.movie.Title}</h2>
                <img src={movie.movie.Poster} alt="value" />
            </div>            
    );
}
export default MovieCard;