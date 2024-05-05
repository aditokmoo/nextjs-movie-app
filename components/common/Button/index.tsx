interface PropTypes {
    children: React.ReactNode
}

export default function Button({ children }: PropTypes) {
    return (
        <button>{children}</button>
    )
}