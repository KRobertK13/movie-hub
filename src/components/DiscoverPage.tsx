import { useState, useEffect } from "react";
import { useMovieData } from "../services/MoviesService";
import { Text, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeletonCard";
import CardsPaginator from "./CardsPaginator";
import LoadingProgressBar from "./LoadingProgressBar";
import { useSearchParams } from "react-router-dom";
const DiscoverPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ? searchParams.get("query") : "";
  const [loaded, setLoaded] = useState(0);
  const { movies, error, page, setPage } = useMovieData(query!);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cardsAmount = Math.min(movies?.total_results!, 20);
  const switchPage = (n: number) => {
    setLoaded(0);
    setPage(n);
  };
  useEffect(() => {
    setLoaded(0); // Reset loading state
    setPage(1); // Reset to the first page if needed
    console.log(searchParams.get("query"));
  }, [searchParams]);
  return (
    <>
      {loaded < cardsAmount && <LoadingProgressBar state={loaded} />}
      <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
        {error}
      </Text>
      <SimpleGrid
        key="0"
        marginX={20}
        gapY={5}
        gapX={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {loaded < cardsAmount &&
          skeletons.map((id) => <SkeletonCard key={id} />)}
      </SimpleGrid>
      <SimpleGrid
        key="1"
        height={loaded >= cardsAmount ? "auto" : "0px"}
        contentVisibility={loaded >= cardsAmount ? "visible" : "hidden"}
        marginX={20}
        gapY={5}
        gapX={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {movies?.results.map((m) => (
          <MovieCard movie={m} key={m.id} loadedHandler={setLoaded} />
        ))}
      </SimpleGrid>
      <CardsPaginator
        pages={Math.min(5000, movies?.total_pages! * 10)}
        current={page}
        setPage={switchPage}
      />
    </>
  );
};

export default DiscoverPage;
