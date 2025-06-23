import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingLeft={5}
      >
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <HStack spaceX={5} marginBottom={5}>
            <PlatformSelector></PlatformSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};
