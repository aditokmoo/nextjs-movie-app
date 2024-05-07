'use client'
import useSearchResult from "@/hooks/useSearchResult";
import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { useTMDBContext } from "@/context/tmdb.context";
import loadingDots from '../../../../assets/gif/dots-loading.gif'
// Components
import Input from "@/components/common/Input";
// Icons
import { IoSearchCircleSharp } from "react-icons/io5";
// SCSS
import styles from './index.module.scss';

export default function MovieSearch() {
    const { searchMovieQuery, setSearchMovieQuery } = useTMDBContext();
    const { debouncedValue } = useDebounce(searchMovieQuery);
    const { isLoading } = useSearchResult(debouncedValue, 'movie', 'searchMovie');

    return (
        <div className={styles.search}>
            <IoSearchCircleSharp className={styles.icon} />
            <Input type="text" placeholder="Search Movie" id="searchMovie" value={searchMovieQuery} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchMovieQuery(e.target.value)} />
            {isLoading && <Image src={loadingDots} alt="loading-dots" width={20} height={20} className={styles.loading} />}
        </div>
    )
}