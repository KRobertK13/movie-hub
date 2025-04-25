import { Input, InputGroup, Center } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
interface SearchProps {
  onSearch: (keyword: string) => void;
}
const SearchBar = ({ onSearch }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Center width="100%">
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup flex="1" marginX={10} startElement={<LuSearch />}>
          <Input ref={ref} placeholder="Search movies or keywords..." />
        </InputGroup>
      </form>
    </Center>
  );
};

export default SearchBar;
