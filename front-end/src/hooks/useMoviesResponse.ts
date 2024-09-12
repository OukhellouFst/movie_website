import { useEffect, useState } from "react";
import { Movie } from "../types/Movie.types";
import axios from 'axios';

interface UseMoviesResponse {
    movies : Movie[];
    loading : boolean;
    error : string | null
}


const useMoviesResponse = (apiKey: string) : UseMoviesResponse  => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async()=> {
        try{
            const response = await axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}?api_key=${apiKey}&sort_by=popularity.desc`)
            setMovies(response.data.results);
        } catch(err) {
            err instanceof Error ? setError(err.message) : setError("An unknown error occurred.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchMovies()
    },[apiKey])


    return {movies,loading,error    }
}

export default useMoviesResponse;