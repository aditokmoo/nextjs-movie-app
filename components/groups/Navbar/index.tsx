// Icons
import { TbMovie } from "react-icons/tb";
// SCSS
import styles from './index.module.scss';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navSection}>
                    <h1 className={styles.title}><TbMovie />Movies & TV Shows</h1>
                    <ul className={styles.links}>
                        <li><Link href='/tv-shows'>TV Shows</Link></li>
                        <li><Link href='/movies'>Movies</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}