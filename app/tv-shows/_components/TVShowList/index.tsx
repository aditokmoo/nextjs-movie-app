'use client'
import { useTMDBContext } from "@/context/tmdb.context";
import useDebounce from "@/hooks/useDebounce";
import { useGetTopRated } from "@/hooks/useGetTopResults";
import TVShowCard from "../TVShowCard";
import useSearchResult from "@/hooks/useSearchResult";
// SCSS
import styles from './index.module.scss';
import { TVShowType } from "@/utils";

export default function TVShowList() {
    const { data: topRatedShows, isLoading: isLoadingTopRatedShows } = useGetTopRated('top-shows', 'tv');
    const { searchQuery } = useTMDBContext();
    const { debouncedValue } = useDebounce(searchQuery, 500);
    const { data: searchedResults, isLoading: isLoadingSearchedResults } = useSearchResult(debouncedValue, 'tv', 'searchTvShow');

    if (isLoadingTopRatedShows || isLoadingSearchedResults) return <h2>Loading...</h2>

    return (
        <div className={styles.tvShowList}>
            {searchedResults.results.length === 0 ? topRatedShows.map((tvShowData: TVShowType) => <TVShowCard key={tvShowData.id} data={tvShowData} />) : searchedResults.results.map((tvShowData: TVShowType) => <TVShowCard key={tvShowData.id} data={tvShowData} />)}
        </div>
    )
}