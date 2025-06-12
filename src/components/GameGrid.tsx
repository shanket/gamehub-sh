import { Fragment } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Fragment>
      {error && <Text>Error: {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spaceX={10}
        spaceY={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          //   <li key={game.id}>{game.name}</li>
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
    </Fragment>
  );
};

export default GameGrid;
