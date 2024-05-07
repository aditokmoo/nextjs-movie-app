import { Movie } from "./_components"
// SCSS
import styles from './page.module.scss';

interface PropTypes {
    params: {
        id: number
    }
}

export default function MoviePage({ params }: PropTypes) {
    return (
        <main className={styles.main}>
            <Movie id={params.id} />
        </main>
    )
}