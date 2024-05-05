// SCSS
import styles from './index.module.scss'

interface PropTypes {
    children: React.ReactNode
    fontWeight?: string
    fontSize?: string
    color?: string
}

export default function CardTitle({ children, fontWeight, fontSize, color }: PropTypes) {
    return (
        <h3 className={styles.title}>{children}</h3>
    )
}