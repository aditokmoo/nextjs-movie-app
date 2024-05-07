'use client'
import { useEffect, useState } from "react";
import { useTMDBContext } from "@/context/tmdb.context";
import useDebounce from "@/hooks/useDebounce";
import { useGetTopRated } from "@/hooks/useGetTopResults";
import MovieCard from "../MovieCard";
import useSearchResult from "@/hooks/useSearchResult";
import { MovieType } from "@/utils";
// SCSS
import styles from './index.module.scss';

export default function MovieList() {
    const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } = useGetTopRated('top-movies', 'movie');
    const { searchMovieQuery } = useTMDBContext();
    const { debouncedValue } = useDebounce(searchMovieQuery, 1000);
    const { data: searchedResults, isLoading: isLoadingSearchedResults } = useSearchResult(debouncedValue, 'movie', 'searchMovie');

    // Determine whether to display top-rated movies or search results
    const displayTopRated = debouncedValue.length < 3 || !searchedResults || searchedResults.results.length === 0;

    // State to track data loading status
    const [dataLoaded, setDataLoaded] = useState(false);

    // Update dataLoaded state when the data is loaded
    useEffect(() => {
        if (!isLoadingTopRatedMovies && !isLoadingSearchedResults) {
            setDataLoaded(true);
        }
    }, [isLoadingTopRatedMovies, isLoadingSearchedResults]);

    if (!dataLoaded) return <h2>Loading...</h2>;

    return (
        <div className={styles.movieList}>
            {displayTopRated
                ? topRatedMovies?.map((movieData: MovieType) => (
                      <MovieCard key={movieData.id} data={movieData} />
                  ))
                : (searchedResults?.results || [])
                      .filter((movieData: MovieType) => movieData.poster_path)
                      .map((movieData: MovieType) => (
                          <MovieCard key={movieData.id} data={movieData} />
                      ))}
        </div>
    );
}