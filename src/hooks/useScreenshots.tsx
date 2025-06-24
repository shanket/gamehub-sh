import type { Screenshot } from "../entities/Screenshot";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useScreenshots;
