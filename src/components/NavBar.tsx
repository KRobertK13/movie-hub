import { MdMovieFilter } from "react-icons/md";
import { Text, HStack, Flex, Box, Center } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";
interface NavBarProps {
  searchHandler: (keyword: string) => void;
}
const NavBar = ({ searchHandler }: NavBarProps) => {
  return (
    <Box>
      <Flex
        justify="space-between"
        flexWrap="nowrap"
        gapX={10}
        paddingY={5}
        paddingX={10}
      >
        <HStack wrap="nowrap">
          <MdMovieFilter color="#a020f0" size="50" />
          <Text textWrap="nowrap" textStyle="2xl">
            KRK Movies
          </Text>
        </HStack>
        <SearchBar onSearch={searchHandler} />
        <Center>
          <ColorModeButton marginLeft={10} size="xl" />
        </Center>
      </Flex>
    </Box>
  );
};

export default NavBar;
