
import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
// import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";
import type { Platform } from "./usePlatform";

import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");


export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{ platform:Platform}[];
  metacritic:number;
  rating_top:number;  
}

// const useGames = (gameQuery: GameQuery) => useData<Game>("/games",{ params:{ genres:gameQuery?.genre?.id,parent_platforms:gameQuery?.platform?.id,ordering:gameQuery?.sortOrder,search:gameQuery?.searchText}},[gameQuery]);

// const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>,Error>({
//   queryKey: ["games", gameQuery],
//   queryFn: () => apiClient.get<FetchResponse<Game>>("/games",{params:{ 
//     genres:gameQuery?.genre?.id,
//     parent_platforms:gameQuery?.platform?.id,
//     ordering:gameQuery?.sortOrder,
//     search:gameQuery?.searchText
//   },}).then(res=>res.data),
//   staleTime: 24 * 60 * 60 * 1000, // 24 hours
//   //initialData: {count: 0, results: []} // Initial data from local
// })

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>,Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => apiClient.getAll({ params:{ 
    genres:gameQuery?.genre?.id,
    parent_platforms:gameQuery?.platform?.id,
    ordering:gameQuery?.sortOrder,
    search:gameQuery?.searchText
  }}),
  //staleTime: 24 * 60 * 60 * 1000, // 24 hours
  //initialData: {count: 0, results: []} // Initial data from local
})

export default useGames;