import MovieCard from "./MovieCard"
import useMoviesResponse from "../../hooks/useMoviesResponse"
import "./MovieCard.css"
/**
 * This component could contain both the MovieCard and MovieDetails components. Depending on the app's state, it can render different views.
 */
const MainMovie: React.FC = () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const {movies,loading,error} = useMoviesResponse(apiKey)
  
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error} </div>

    return (
        <div className="movies-container">
            <div className="movies-grid">
                {movies.map(movie=>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default MainMovie