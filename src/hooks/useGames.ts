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

    useEffect(() => {
        const controller = new AbortController();
        apiClient
        .get<FetchGamesResponse>("/games",{ signal: controller.signal })
        .then((response) => setGames(response.data.results))
        .catch((error) => { 
            if (error.name === "CanceledError") return; // Ignore the error if the request was canceled
            setError(error.message)
        });

        return () => controller.abort(); // Cleanup function to abort the request if the component unmounts
    },[]);

    return { games, error };
}

export default useGames;