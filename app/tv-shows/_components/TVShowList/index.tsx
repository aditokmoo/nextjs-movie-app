'use client'
import { useEffect, useState } from "react";
import { useTMDBContext } from "@/context/tmdb.context";
import useDebounce from "@/hooks/useDebounce";
import { useGetTopRated } from "@/hooks/useGetTopResults";
import TVShowCard from "../TVShowCard";
import useSearchResult from "@/hooks/useSearchResult";
import { TVShowType } from "@/utils";
// SCSS
import styles from './index.module.scss';

export default function TVShowList() {
    const { data: topRatedShows, isLoading: isLoadingTopRatedShows } = useGetTopRated('top-shows', 'tv');
    const { searchTVShowQuery } = useTMDBContext();
    const { debouncedValue } = useDebounce(searchTVShowQuery, 1000);
    const { data: searchedResults, isLoading: isLoadingSearchedResults } = useSearchResult(debouncedValue, 'tv', 'searchTvShow');

    // Determine whether to display top-rated shows or search results
    const displayTopRated = debouncedValue.length < 3 || !searchedResults || searchedResults.results.length === 0;

    // State to track data loading status
    const [dataLoaded, setDataLoaded] = useState(false);

    // Update dataLoaded state when the data is loaded
    useEffect(() => {
        if (!isLoadingTopRatedShows && !isLoadingSearchedResults) {
            setDataLoaded(true);
        }
    }, [isLoadingTopRatedShows, isLoadingSearchedResults]);

    if (!dataLoaded) return <h2>Loading...</h2>;

    return (
        <div className={styles.tvShowList}>
            {displayTopRated
                ? topRatedShows.map((tvShowData: TVShowType) => (
                      <TVShowCard key={tvShowData.id} data={tvShowData} />
                  ))
                : (searchedResults?.results || [])
                      .filter((showData: TVShowType) => showData.poster_path)
                      .map((tvShowData: TVShowType) => (
                          <TVShowCard key={tvShowData.id} data={tvShowData} />
                      ))}
        </div>
    );
}