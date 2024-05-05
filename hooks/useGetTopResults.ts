"use client";
import { getTopRated } from "@/API/services";
import { useQuery } from "@tanstack/react-query";

export function useGetTopRated(key: string, type: string) {
  const { data, isLoading } = useQuery({
    queryKey: [key],
    queryFn: () => getTopRated(type),
  });

  return { data, isLoading };
}
