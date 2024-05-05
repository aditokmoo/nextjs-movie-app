// Components
import CardOverlay from './CardOverlay';
import CardRating from './CardRating';
import CardTitle from './CardTitle';
// SCSS
import styles from './index.module.scss';

interface PropTypes {
    children: React.ReactNode,
    bgImage: string,
}

export default function Card({ children, bgImage }: PropTypes) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${bgImage})` }}>
            {children}
        </div>
    )
}

Card.Overlay = CardOverlay;
Card.Title = CardTitle;
Card.Rating = CardRating;