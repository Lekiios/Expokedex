import { useQuery } from "@tanstack/react-query";

const ENDPOINT = "https://pokeapi.co/api/v2";

export const useFetchQuery = (path: string) => {
  return useQuery({
    queryKey: [path],
    queryFn: async () => {
      await wait(1000); // Simulate network latency
      const response = await fetch(ENDPOINT + path);
      return response.json();
    },
  });
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
