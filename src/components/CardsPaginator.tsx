import { ButtonGroup, IconButton, Pagination, Flex } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
interface PaginatorData {
  pages: number;
  current: number;
  setPage: (page: number) => void;
}
const CardsPaginator = ({ pages, current, setPage }: PaginatorData) => {
  return (
    <Flex justify="center" align="center" marginY="10">
      <Pagination.Root
        count={pages}
        page={current}
        defaultPage={1}
        onPageChange={(e) => setPage(e.page)}
      >
        <ButtonGroup variant="outline" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "outline", _selected: "solid" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Flex>
  );
};
export default CardsPaginator;
