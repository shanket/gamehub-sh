// import useData from "./useData";
// import type { Platform } from "./useGames";

// const usePlatforms = ()=>useData<Platform>("/platforms/lists/parents");

import platforms from "../data/platforms"
const usePlatforms = ()=> ({data:platforms,isLoading:false,error:null});

export default usePlatforms;