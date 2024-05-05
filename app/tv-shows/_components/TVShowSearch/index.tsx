'use client'
import Image from "next/image";
import { useTMDBContext } from "@/context/tmdb.context";
import loadingDots from '../../../../assets/gif/dots-loading.gif'
// Components
import Input from "@/components/common/Input";
// Icons
import { IoSearchCircleSharp } from "react-icons/io5";
// SCSS
import styles from './index.module.scss';
import useSearchResult from "@/hooks/useSearchResult";
import useDebounce from "@/hooks/useDebounce";

export default function TVShowSearch() {
    const { searchQuery, setSearchQuery } = useTMDBContext();
    const { debouncedValue } = useDebounce(searchQuery);
    const { isLoading } = useSearchResult(debouncedValue, 'tv', 'searchTvShow');

    return (
        <div className={styles.search}>
            <IoSearchCircleSharp className={styles.icon} />
            <Input type="text" placeholder="Search TV Show" id="searchTvShow" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
            {isLoading && <Image src={loadingDots} alt="loading-dots" width={20} height={20} className={styles.loading} />}
        </div>
    )
}