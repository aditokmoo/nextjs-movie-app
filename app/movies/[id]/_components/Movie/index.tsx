'use client'
import { imagePath } from "@/utils";
import { useGetTrailer } from "@/hooks/useGetTrailer";
import { FaStar } from "react-icons/fa";
import { useGetSingleResult } from "@/hooks/useGetSingleResult"
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Link from "next/link";
// SCSS
import styles from './index.module.scss';

interface PropTypes {
    id: number
}

export default function Movie({ id }: PropTypes) {
    const { data: movieData, isLoading: isLoadingMovieData } = useGetSingleResult('movie', 'movie', id);
    const { data: movieTrailerData, isLoading: isLoadingMovieTrailerData } = useGetTrailer('movie', id, 'trailer');

    if (isLoadingMovieData || isLoadingMovieTrailerData) return <h2>Loading...</h2>

    const movieKey = movieTrailerData?.results[0]?.key;

    return (
        <div className={styles.movie} style={{ backgroundImage: `url(${imagePath}${movieData?.backdrop_path})` }}>
            <div className={styles.overlay}></div>
            <div className="container">
                <div className={styles.movieSection}>
                    <Link href='/movies' className={styles.backBtn}><MdKeyboardDoubleArrowLeft />Back</Link>
                    <h1 className={styles.title}>{movieData?.original_title}</h1>
                    <p className={styles.overview}>{movieData?.overview}</p>
                    <div className={styles.details}>
                        <a href={`https://youtube.com/embed/${movieKey}`} target="_blank" className={styles.trailerBtn}><FaRegCirclePlay />Play</a>
                        <span className={styles.rating}><FaStar /> {movieData?.vote_average.toString().slice(0, 3)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}