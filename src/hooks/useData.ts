import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


interface FetchResponse<T> {
  count: number;
  results: T[];
}


const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchResponse<T>>(endpoint,{ signal: controller.signal })
        .then((response) => { 
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => { 
            if (error.name === "CanceledError") return; // Ignore the error if the request was canceled
            setError(error.message);
            setLoading(false);
        });

        return () => controller.abort(); // Cleanup function to abort the request if the component unmounts
    },[]);

    return { data , error, isLoading };
}

export default useData;