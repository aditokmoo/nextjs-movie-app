'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import { TbMovie } from "react-icons/tb";
// SCSS
import styles from './index.module.scss';

export default function Navbar() {
    const pathname = usePathname();
    const getMovieOrShow = pathname.split('/')[2];
    return (
        <nav className={getMovieOrShow ? `${styles.nav} ${styles.opacity}` : styles.nav}>
            <div className="container">
                <div className={styles.navSection}>
                    <h1 className={styles.title}><TbMovie />Movies & TV Shows</h1>
                    <ul className={styles.links}>
                        <li><Link href='/tv-shows' className={pathname.startsWith('/tv-shows') ? styles.active : ''}>TV Shows</Link></li>
                        <li><Link href='/movies' className={pathname.startsWith('/movies') ? styles.active : ''}>Movies</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}