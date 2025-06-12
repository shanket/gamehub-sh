import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{ platform:Platform}[];
  metacritic:number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchGamesResponse>("/games",{ signal: controller.signal })
        .then((response) => { 
          setGames(response.data.results);
          setLoading(false);
        })
        .catch((error) => { 
            if (error.name === "CanceledError") return; // Ignore the error if the request was canceled
            setError(error.message);
            setLoading(false);
        });

        return () => controller.abort(); // Cleanup function to abort the request if the component unmounts
    },[]);

    return { games, error, isLoading };
}

export default useGames;