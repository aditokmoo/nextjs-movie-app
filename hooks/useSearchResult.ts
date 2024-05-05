import { getSearchedResult } from "@/API/services";
import { useQuery } from "@tanstack/react-query";

export default function useSearchResult(
  query: string,
  type: string,
  key: string,
) {
  const { data, isLoading } = useQuery({
    queryKey: [key, query],
    queryFn: () => getSearchedResult(query, type),
  });

  return { data, isLoading };
}
