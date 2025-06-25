
import { useInfiniteQuery } from "@tanstack/react-query";
// import type { GameQuery } from "../App"; //Before Zustand
// import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

import ms from "ms";
import useGameQueryStore from "../store";
// Update the import path below if 'Game' is defined elsewhere, e.g. '../entities/Game'
import type Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");


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


//Before Zustand --Start

// const useGames = (gameQuery: GameQuery) =>  useInfiniteQuery<FetchResponse<Game>,Error>(
//   {
//     queryKey: ["games", gameQuery],
//     queryFn: ({ pageParam = 1 }) => apiClient.getAll(
//       { params:
//         { 
//           genres:gameQuery.genreId,
//           parent_platforms:gameQuery.platformId,
//           ordering:gameQuery?.sortOrder,
//           search:gameQuery?.searchText,
//           page: pageParam
//         }
//       }),  
//     getNextPageParam: (lastPage, allPages) => {
//       // Assuming the API returns a 'next' property (URL or boolean)
//       return (lastPage.next ? allPages.length + 1 : undefined);
//     }, 
//     staleTime: ms("24h"), // 24 hours
//     initialPageParam: 1
//   }
// )

//Before Zustand --End

const useGames = () => { 
    const gameQuery =  useGameQueryStore(s=>s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>,Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) => apiClient.getAll(
        { params:
          { 
            genres:gameQuery.genreId,
            parent_platforms:gameQuery.platformId,
            ordering:gameQuery?.sortOrder,
            search:gameQuery?.searchText,
            page: pageParam
          }
        }),  
      getNextPageParam: (lastPage, allPages) => {
        // Assuming the API returns a 'next' property (URL or boolean)
        return (lastPage.next ? allPages.length + 1 : undefined);
      }, 
      staleTime: ms("24h"), // 24 hours
      initialPageParam: 1
    })
  }

export default useGames;