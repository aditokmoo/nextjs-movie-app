'use client'
import { useGetSingleResult } from "@/hooks/useGetSingleResult"

interface PropTypes {
    id: number
}

export default function Show({ id }: PropTypes) {
    const { data, isLoading } = useGetSingleResult('show', 'tv', id);

    if (isLoading) return <h2>Loading...</h2>

    console.log(data)

    return (
        <div>{data.name}</div>
    )
}