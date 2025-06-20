import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// export default axios.create({
//     baseURL: "https://api.rawg.io/api",    
//     headers: {
//         "Content-Type": "application/json"        
//     },
//     params: {
//         key: "833973971e334275a9c37de7ff42c20d"
//     }
// });

const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",    
    headers: {
        "Content-Type": "application/json"        
    },
    params: {
        key: ""
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config:AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then(response => response.data);        
    }   
}

export default APIClient;