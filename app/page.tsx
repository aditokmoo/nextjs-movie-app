import Link from "next/link";
// SCSS
import styles from './page.module.scss';

export default async function HomePage() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.heading}>Find Top Movies and TV Shows</h1>
                <Link href='/tv-shows' className={styles.exploreBtn}>Explore</Link>
            </main>
        </>
    );
}