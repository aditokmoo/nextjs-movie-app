'use client'
import { useTMDBContext } from "@/context/tmdb.context";
import useDebounce from "@/hooks/useDebounce";
import { useGetTopRated } from "@/hooks/useGetTopResults";
import useSearchResult from "@/hooks/useSearchResult";
import MovieCard from "../MovieCard";
// SCSS
import styles from './index.module.scss';

export default function MovieList() {
    const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } = useGetTopRated('top-movies', 'movie');
    const { searchQuery } = useTMDBContext();
    const { debouncedValue } = useDebounce(searchQuery, 500);
    const { data: searchedResults, isLoading: isLoadingSearchedResults } = useSearchResult(debouncedValue, 'movie', 'searchMovie');

    if (isLoadingTopRatedMovies || isLoadingSearchedResults) return <h2>Loading...</h2>

    console.log(topRatedMovies)

    return (
        <div className={styles.movieList}>
            {searchedResults.results.length === 0 ? topRatedMovies.map((movieData: any) => <MovieCard key={movieData.id} data={movieData} />) : searchedResults.results.map((movieData: any) => <MovieCard key={movieData.id} data={movieData} />)}
        </div>
    )
}