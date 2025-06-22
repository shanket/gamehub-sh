import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "../store";

//Before Zustand --Start
// interface SearchInputProps {
//   onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: SearchInputProps) => {
//   const ref = useRef<HTMLInputElement>(null);

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         if (ref.current) onSearch(ref.current.value);
//       }}
//     >
//       <InputGroup startElement={<BsSearch />}>
//         <Input
//           borderRadius={20}
//           placeholder="Search games..."
//           variant="outline"
//           ref={ref}
//           size="lg"
//         />
//       </InputGroup>
//     </form>
//   );
// };
//Before Zustand --End

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="outline"
          ref={ref}
          size="lg"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
