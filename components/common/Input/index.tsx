// SCSS
import styles from './index.module.scss';

interface PropTypes {
    type: string
    placeholder: string
    id: string
    label?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, placeholder, id, onChange, label }: PropTypes) {
    return (
        <label htmlFor={id} className={styles.label}>
            {label && label}
            <input type={type} placeholder={placeholder} id={id} className={styles.input} onChange={onChange} />
        </label>
    )
}