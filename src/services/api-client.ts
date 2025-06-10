import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    // baseURL:"https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/",
    headers: {
        "Content-Type": "application/json"        
    },
    params: {
        key: "7bb6fe229d1048238056cb05be0c1393"
    }
})