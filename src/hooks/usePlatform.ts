// import useData from "./useData";
// import type { Platform } from "./useGames";

// const usePlatforms = ()=>useData<Platform>("/platforms/lists/parents");

import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms"
import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";
import type { Platform } from "./useGames";

const usePlatforms =()=> useQuery({
  queryKey: ["platforms"],
  queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
  staleTime: 1000 * 60 * 60 * 24, //  // 24 hours
  initialData: {count:platforms.length, results: platforms}
})



export default usePlatforms;