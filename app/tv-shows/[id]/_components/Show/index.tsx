'use client'
import { imagePath } from "@/utils";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useGetSingleResult } from "@/hooks/useGetSingleResult"
import { FaRegCirclePlay } from "react-icons/fa6";
import { useGetTrailer } from "@/hooks/useGetTrailer";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
// SCSS
import styles from './index.module.scss';

interface PropTypes {
    id: number
}

export default function Show({ id }: PropTypes) {
    const { data: showData, isLoading: isLoadingShowData } = useGetSingleResult('show', 'tv', id);
    const { data: showTrailerData, isLoading: isLoadingShowTrailerData } = useGetTrailer('tv', id, 'trailer');

    if (isLoadingShowData || isLoadingShowTrailerData) return <h2>Loading...</h2>

    const showKey = showTrailerData?.results[0]?.key;

    return (
        <div className={styles.show} style={{ backgroundImage: `url(${imagePath}${showData?.backdrop_path})` }}>
            <div className={styles.overlay}></div>
            <div className="container">
                <div className={styles.showSection}>
                    <Link href='/movies' className={styles.backBtn}><MdKeyboardDoubleArrowLeft />Back</Link>
                    <h1 className={styles.title}>{showData?.original_name}</h1>
                    <p className={styles.overview}>{showData?.overview}</p>
                    <div className={styles.details}>
                        <a href={`https://youtube.com/embed/${showKey}`} target="_blank" className={styles.trailerBtn}><FaRegCirclePlay />Play</a>
                        <span className={styles.rating}><FaStar /> {showData?.vote_average.toString().slice(0, 3)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}