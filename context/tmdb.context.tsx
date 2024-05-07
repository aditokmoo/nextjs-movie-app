'use client'
import { createContext, useContext, useState } from "react"

interface ContextType {
    searchMovieQuery: string,
    setSearchMovieQuery: (query: string) => void,
    searchTVShowQuery: string,
    setSearchTVShowQueryQuery: (query: string) => void
}

interface PropTypes {
    children: React.ReactNode
}

const TMDBContext = createContext<ContextType | null>(null);

export default function TMDBContextProvider({ children }: PropTypes) {
    const [searchMovieQuery, setSearchMovieQuery] = useState('');
    const [searchTVShowQuery, setSearchTVShowQueryQuery] = useState('');

    return (
        <TMDBContext.Provider value={{
            searchMovieQuery,
            setSearchMovieQuery,
            searchTVShowQuery,
            setSearchTVShowQueryQuery
        }}>
            {children}
        </TMDBContext.Provider>
    )
}

export function useTMDBContext() {
    const context = useContext(TMDBContext);
    if (!context) throw new Error("TMDBContext must be used within a TMDBContextProvider")
    return context;
}