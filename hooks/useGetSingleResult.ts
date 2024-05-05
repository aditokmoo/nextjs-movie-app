"use client";
import { getSingleResult } from "@/API/services";
import { useQuery } from "@tanstack/react-query";

export function useGetSingleResult(key: string, type: string, id: number) {
  const { data, isLoading } = useQuery({
    queryKey: [key],
    queryFn: () => getSingleResult(type, id),
  });

  return { data, isLoading };
}
