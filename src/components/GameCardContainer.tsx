import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
      width="100%"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
