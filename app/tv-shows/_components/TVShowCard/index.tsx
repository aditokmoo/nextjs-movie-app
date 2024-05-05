import Link from "next/link";
// Components
import Card from "@/components/common/Card";
import CardRating from "@/components/common/Card/CardRating";
import CardTitle from "@/components/common/Card/CardTitle";
// Utils
import { imagePath } from "@/utils";
// Icons
import { IoMdSkipForward } from "react-icons/io";
// SCSS
import styles from "./index.module.scss";

interface PropTypes {
    data: {
        id: number,
        poster_path: string,
        name: string,
        vote_average: number,
        overview: string,
    }
}

export default function TVShowCard({ data }: PropTypes) {
    return (
        <Link href={`/tv-shows/${data.id}`} className={styles.card}>
            <Card bgImage={`${imagePath}${data.poster_path}`}>
                <div className={styles.cardOverlay}>
                    <div className={styles.overlayContent}>
                        <div className={styles.content}>
                            <h4>{data.name}</h4>
                            <p>{data.overview.slice(0, 50)}...</p>
                        </div>
                        <IoMdSkipForward className={styles.icon} />

                    </div>
                </div>
                <div className={styles.cardContent}>
                    <CardTitle>{data.name}</CardTitle>
                    <CardRating>{data.vote_average.toString().slice(0, 3)}</CardRating>
                </div>
            </Card>
        </Link>
    )
}