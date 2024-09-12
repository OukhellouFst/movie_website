/**
 * This file defines TypeScript interfaces for the movie data, ensuring type safety across the app.
 */
export interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string; 
}

export interface MovieCardProps {
    movie: Movie;
}

export interface MovieDetailsProps {
    movie: Movie;
}