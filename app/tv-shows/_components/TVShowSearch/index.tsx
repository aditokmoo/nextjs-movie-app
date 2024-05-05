'use client'
// Components
import Input from "@/components/common/Input";
// Icons
import { IoSearchCircleSharp } from "react-icons/io5";
// SCSS
import styles from './index.module.scss';
import { useTMDBContext } from "@/context/tmdb.context";

export default function TVShowSearch() {
    const { setSearchQuery } = useTMDBContext();

    return (
        <div className={styles.search}>
            <IoSearchCircleSharp className={styles.icon} />
            <Input type="text" placeholder="Search TV Show" id="searchTvShow" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
        </div>
    )
}