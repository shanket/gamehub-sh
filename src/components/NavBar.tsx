import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

//Before Zustand --Start
// interface NavBarProps {
//   onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: NavBarProps) => {
//   return (
//     <HStack padding="10px">
//       <Image src={logo} alt="Logo" boxSize="60px" />
//       <SearchInput onSearch={onSearch} />
//       <ColorModeSwitch />
//     </HStack>
//   );
// };
//Before Zustand --End

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} alt="Logo" boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
