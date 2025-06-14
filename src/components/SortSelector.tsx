import { MenuRoot, MenuTrigger, Menu, Portal, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Relevance">Relevance</Menu.Item>
            <Menu.Item value="Date added">Date added</Menu.Item>
            <Menu.Item value="Name">Name</Menu.Item>
            <Menu.Item value="Release date">Release date</Menu.Item>
            <Menu.Item value="Popularity">Popularity</Menu.Item>
            <Menu.Item value="Average rating">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default SortSelector;
