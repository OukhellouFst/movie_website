/**
 * This component is used when displaying detailed information about a specific movie.
 */

import { MovieDetailsProps } from "../../types/Movie.types";

const MovieDetails : React.FC<MovieDetailsProps> = ({movie}) => {
    return(
        <div className="movie-details">
            <img src={movie.poster_path} alt={movie.original_title} className="movie-details__poster"/>
            <div className="movie-details__info">
                <h1 className="movie-details__title">{movie.original_title}</h1>
                <p className="movie-details__release-date">Released : {movie.release_date}</p>
                <p className="movie-details__rating">Rating : {movie.vote_average}/10</p>
                <p className="movie-details__description">{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails