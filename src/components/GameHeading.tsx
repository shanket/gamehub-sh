import { Heading } from "@chakra-ui/react";

// import { type GameQuery } from "../App"; //before Zustand
import useGenre from "../hooks/useGenre";

import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

//Before Zustand --Start
// interface GameHeadingProps {
//   gameQuery: GameQuery;
// }

// const GameHeading = ({ gameQuery }: GameHeadingProps) => {
//   //Games
//   //Action Games
//   //Xbox Games
//   //Xbox Action Games

//   const genre = useGenre(gameQuery.genreId);
//   const platform = usePlatform(gameQuery?.platformId);

//   const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
//   return (
//     <Heading as="h1" marginY={10} fontSize="5xl">
//       {heading}
//     </Heading>
//   );
// };
//Before Zustand --End

const GameHeading = () => {
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={10} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
