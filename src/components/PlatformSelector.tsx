import { Button, Menu, MenuRoot, MenuTrigger, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

//Before Zustand --Start
// interface PlatformSelectorProps {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

// const PlatformSelector = ({
//   onSelectPlatform,
//   selectedPlatformId,
// }: PlatformSelectorProps) => {
//   const { data, error } = usePlatforms();

//   const selectedPlatform = usePlatform(selectedPlatformId);

//   if (error) return null;
//   return (
//     <MenuRoot>
//       <MenuTrigger asChild>
//         <Button variant="outline" size="sm">
//           {selectedPlatform?.name || "Platforms"} <BsChevronDown />
//         </Button>
//       </MenuTrigger>
//       <Portal>
//         <Menu.Positioner>
//           <Menu.Content>
//             {data?.results.map((platform) => (
//               <Menu.Item
//                 key={platform.id}
//                 value={platform.name}
//                 onClick={() => onSelectPlatform(platform)}
//               >
//                 {platform.name}
//               </Menu.Item>
//             ))}
//           </Menu.Content>
//         </Menu.Positioner>
//       </Portal>
//     </MenuRoot>
//   );
// };
//Before Zustand --End

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => setSelectedPlatformId(platform.id)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default PlatformSelector;
