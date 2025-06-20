// import useData from "./useData";

import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
// import apiClient from "../services/api-client";
// import type { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");


export interface Genre {
  id: number;
  name: string;
  image_background:string;    
}

// const useGenres = ()=> useData<Genre>("/genres");
// const useGenres = ()=> ({data:genres,isLoading:false,error:null});
// const useGenres = ()=> useQuery({
//   queryKey: ["genres"],
//   queryFn:()=> apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
//   staleTime: 24 * 60 * 60 * 1000, // 24 hours
//   initialData: {count: genres.length, results:genres} // Initial data from local file
// })

const useGenres = ()=> useQuery({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: {count: genres.length, results:genres} // Initial data from local file
})

export default useGenres;