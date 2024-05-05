'use client'
import TMDBContextProvider from "@/context/tmdb.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface PropTypes {
    children: React.ReactNode
}


export default function Providers({ children }: PropTypes) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <TMDBContextProvider>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </TMDBContextProvider>
        </QueryClientProvider>
    )
}