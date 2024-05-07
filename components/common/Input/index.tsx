// SCSS
import styles from './index.module.scss';

interface PropTypes {
    type: string
    placeholder: string
    id: string,
    value: string,
    label?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, placeholder, id, onChange, label, value }: PropTypes) {
    return (
        <label htmlFor={id} className={styles.label}>
            {label && label}
            <input type={type} placeholder={placeholder} id={id} value={value} className={styles.input} onChange={onChange} />
        </label>
    )
}