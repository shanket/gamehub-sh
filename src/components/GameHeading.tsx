import { Heading } from "@chakra-ui/react";

import { type GameQuery } from "../App"; //

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={10} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
