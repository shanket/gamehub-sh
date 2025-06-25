import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import type Trailer from '../entities/Trailer';
import type { FetchResponse } from '../services/api-client';

const useTrailers = (gameId:number) =>{ 

  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
   });
}


export default useTrailers;