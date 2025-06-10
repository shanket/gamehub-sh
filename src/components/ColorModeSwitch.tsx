import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette="green"
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
