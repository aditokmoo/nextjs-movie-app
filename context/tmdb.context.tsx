'use client'
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"

interface ContextType {
    searchQuery: string,
    setSearchQuery: (query: string) => void
}

interface PropTypes {
    children: React.ReactNode
}

const TMDBContext = createContext<ContextType | null>(null);

export default function TMDBContextProvider({ children }: PropTypes) {
    const [searchQuery, setSearchQuery] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setSearchQuery('');
    }, [pathname]);

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