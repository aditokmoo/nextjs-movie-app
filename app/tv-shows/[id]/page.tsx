import { Show } from "./_components"

interface PropTypes {
    params: {
        id: number
    }
}

export default function TVShowPage({ params }: PropTypes) {
    return <Show id={params.id} />
}