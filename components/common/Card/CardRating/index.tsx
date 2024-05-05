// SCSS
import styles from './index.module.scss';

interface PropTypes {
    children: React.ReactNode
}

export default function CardRating({ children }: PropTypes) {
    return <span className={styles.rating}>{children}</span>
}