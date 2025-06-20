import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",    
    headers: {
        "Content-Type": "application/json"        
    },
    params: {
        key: ""
    }
});

// const axiosInstance =  axios.create({
//     baseURL: "https://api.rawg.io/api",
//     // baseURL:"https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/",
//     headers: {
//         "Content-Type": "application/json"        
//     },
//     params: {
//         key: "833973971e334275a9c37de7ff42c20d"
//     }
// });

// class ApiClient<T> {
//     endpoint: string;

//     constructor(endpoint: string) {
//         this.endpoint = endpoint;
//     }

//     getAll = (params: object = {}) => {
//         return axiosInstance.get<T[]>(this.endpoint, { params }).then(response => response.data);        
//     }

//     post = (data:T) => {
//         return axiosInstance.post<T>(this.endpoint, data).then(response => response.data);
//     }
// }

// export default ApiClient;