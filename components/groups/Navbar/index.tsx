'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import { TbMovie } from "react-icons/tb";
// SCSS
import styles from './index.module.scss';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navSection}>
                    <h1 className={styles.title}><TbMovie />Movies & TV Shows</h1>
                    <ul className={styles.links}>
                        <li><Link href='/tv-shows' className={pathname === '/tv-shows' ? styles.active : ''}>TV Shows</Link></li>
                        <li><Link href='/movies' className={pathname === '/movies' ? styles.active : ''}>Movies</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}