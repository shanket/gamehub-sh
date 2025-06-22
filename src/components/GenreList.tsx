import { Fragment } from "react";
import {
  HStack,
  ListItem,
  ListRoot,
  Image,
  Link,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

//Before Zustand --Start
// interface GenreListProps {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }

// const GenreList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
//   // const { genres } = useGenres();
//   const { data, isLoading, error } = useGenres();
//   if (error) return null;
//   if (isLoading) return <Spinner />;

//   return (
//     <Fragment>
//       <Heading fontSize="2xl" marginBottom={3}>
//         Genres
//       </Heading>
//       <ListRoot listStyleType="none">
//         {data?.results.map((genre) => (
//           <ListItem key={genre.id} paddingY="5px">
//             <HStack>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 objectFit="cover"
//                 src={getCroppedImageUrl(genre.image_background)}
//               />
//               <Link
//                 onClick={() => onSelectGenre(genre)}
//                 fontSize="md"
//                 variant="plain"
//                 fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
//                 whiteSpace="normal"
//                 textAlign="left"
//               >
//                 {genre.name}
//               </Link>
//             </HStack>
//           </ListItem>
//         ))}
//       </ListRoot>
//     </Fragment>
//   );
// };
//Before Zustand --End

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Fragment>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <ListRoot listStyleType="none">
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="md"
                variant="plain"
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </ListRoot>
    </Fragment>
  );
};

export default GenreList;
