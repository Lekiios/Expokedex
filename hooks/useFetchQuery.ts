import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const ENDPOINT = "https://pokeapi.co/api/v2";

export const useFetchQuery = (path: string) => {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      await wait(1000); // Simulate network latency
      const response = await fetch(ENDPOINT + path, {
        headers: { Accept: "application/json" },
      });
      return response.json();
    },
  });
};

export const useInfiniteFetchQuery = (path: string) => {
  return useInfiniteQuery({
    initialData: undefined,
    queryKey: [path],
    initialPageParam: ENDPOINT + path,
    queryFn: async ({ pageParam }) => {
      await wait(1000); // Simulate network latency
      const response = await fetch(pageParam, {
        headers: { Accept: "application/json" },
      });
      return response.json();
    },
    getNextPageParam: (lastPage) => {
      if ("next" in lastPage) {
        return lastPage.next;
      }
      return null;
    },
  });
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
