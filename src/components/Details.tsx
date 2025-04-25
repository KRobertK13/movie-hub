import { useParams } from "react-router-dom";
import Stars from "./Stars";
import DatePresenter from "./DatePresenter";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { useMovieDetail } from "../services/MoviesService";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = id ? Number(id) : 0;
  const { movie } = useMovieDetail(numericId);

  return (
    <Box
      width="100%"
      position="relative"
      minHeight="90vh"
      display="flex"
      flexDirection="column"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url(${movie?.backdrop_path})`}
        backgroundColor={"blackAlpha.800"}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="brightness(0.6)"
        zIndex={-1}
      />
      <Flex
        color="white"
        px={8}
        pt={4}
        direction="column"
        position="relative"
        zIndex={2}
      >
        <Flex direction={{ base: "column", md: "row" }} align="flex-start">
          <Box mt={12} mr={8} ml={5} minW="200px">
            <Image src={movie?.poster_path} borderRadius="md" boxShadow="lg" />
          </Box>

          <VStack align="start" gap={2} flex={1} mt={12}>
            <Heading size="5xl">{movie?.title}</Heading>
            <Text fontSize="xl">{movie?.tagline}</Text>
            <Text marginTop={10} fontSize="xl">
              Release date: <DatePresenter dateString={movie?.release_date!} />
            </Text>
            <Text fontSize="xl">
              Runtime: {Math.floor(movie?.runtime! / 60)}h{" "}
              {movie?.runtime! % 60} m
            </Text>
            <Text fontSize="xl">Budget: ${movie?.budget! / 1000000}M</Text>
            <Text fontSize="xl">
              Revenue: ${Math.round(movie?.revenue! / 1000000)}M
            </Text>

            <HStack marginTop={10} gap={2} wrap="wrap">
              {movie?.genres.map((genre) => (
                <Badge key={genre.id} colorScheme="teal" size="md">
                  {genre.name}
                </Badge>
              ))}
            </HStack>
            <Stars numericRating={movie?.vote_average!} />
          </VStack>
        </Flex>

        <Box mb={10} mt={8} px={5} maxW="800px">
          <Text fontSize="lg">{movie?.overview}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default DetailsPage;
