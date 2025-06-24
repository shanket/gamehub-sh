import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  slug: string;
  genres:Genre[];
  publishers?:Publisher[];
}
