import { getMovieAndTVShowTrailer } from "@/API/services";
import { useQuery } from "@tanstack/react-query";

export function useGetTrailer(type: string, id: number, key: string) {
    const { data, isLoading } = useQuery({
        queryKey: [key],
        queryFn: () => getMovieAndTVShowTrailer(type, id)
    });

    return { data, isLoading }
}