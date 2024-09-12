import React from "react";
import { MovieCardProps } from "../../types/Movie.types";
import './MovieCard.css'

/**
 * This component displays a summary of the movie (e.g., in a list or grid view).
 */
const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return (
        <div className="movie-card">
            <img 
                src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}`} 
                alt={movie.original_title} 
                className="movie_card__poster"/>
            <div className="movie_card__info">
                <h2 className="movie-card__title">{movie.original_title}</h2>
                <p className="movie-card__release-date">Released: {movie.release_date}</p>
                <p className="movie-card__rating">Rating : {movie.vote_average}/10</p>
            </div>
        </div>
    )
};

export default MovieCard;