
import APIClient from "../services/api-client";
import type Game from "../entities/Game";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug:string) => { 
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  //initialData: {count: 0, results: []} // Initial data from local
  })
}

export default useGame;