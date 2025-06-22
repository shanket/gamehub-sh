import { MenuRoot, MenuTrigger, Menu, Portal, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

//Before Zustand --Start
// interface SortSelectorProps {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }

// const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
//   const sortOrders = [
//     { value: "", label: "Relevance" },
//     { value: "-added", label: "Date added" },
//     { value: "name", label: "Name" },
//     { value: "-released", label: "Release date" },
//     { value: "-metacritic", label: "Popularity" },
//     { value: "-rating", label: "Average rating" },
//   ];

//   const currentSortOrder = sortOrders.find(
//     (order) => order.value === sortOrder
//   );

//   return (
//     <MenuRoot>
//       <MenuTrigger asChild>
//         <Button variant="outline" size="sm">
//           Order by: {currentSortOrder?.label || "Relevance"}
//           <BsChevronDown />
//         </Button>
//       </MenuTrigger>
//       <Portal>
//         <Menu.Positioner>
//           <Menu.Content>
//             {sortOrders.map((order) => (
//               <Menu.Item
//                 key={order.value}
//                 value={order.value}
//                 onClick={() => onSelectSortOrder(order.value)}
//               >
//                 {order.label}
//               </Menu.Item>
//             ))}
//           </Menu.Content>
//         </Menu.Positioner>
//       </Portal>
//     </MenuRoot>
//   );
// };
//Before Zustand --End

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => setSortOrder(order.value)}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default SortSelector;
