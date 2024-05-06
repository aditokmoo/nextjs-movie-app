import { Show } from "./_components"
import styles from './page.module.scss';

interface PropTypes {
    params: {
        id: number
    }
}

export default function TVShowPage({ params }: PropTypes) {
    return (
        <main className={styles.main}>
            <Show id={params.id} />
        </main>
    )
}