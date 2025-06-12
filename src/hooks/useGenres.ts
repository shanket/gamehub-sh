import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


export interface Genre {
  id: number;
  name: string;    
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchGenresResponse>("/genres",{ signal: controller.signal })
        .then((response) => { 
          setGenres(response.data.results);
          setLoading(false);
        })
        .catch((error) => { 
            if (error.name === "CanceledError") return; // Ignore the error if the request was canceled
            setError(error.message);
            setLoading(false);
        });

        return () => controller.abort(); // Cleanup function to abort the request if the component unmounts
    },[]);

    return { genres, error, isLoading };
}

export default useGenres;