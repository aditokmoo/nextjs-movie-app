'use client'

import { createContext, useContext, useState } from "react"

interface ContextType {
    searchQuery: string,
    setSearchQuery: (query: string) => void
}

const TMDBContext = createContext<ContextType | null>(null);

export default function TMDBContextProvider({ children }: any) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <TMDBContext.Provider value={{
            searchQuery,
            setSearchQuery,
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