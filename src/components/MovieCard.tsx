import { Card, Flex, Image, Badge, Link } from "@chakra-ui/react";
import Movie from "../interfaces/movie";
import Stars from "./Stars";
import DatePresenter from "./DatePresenter";
interface CardProps {
  movie: Movie;
  loadedHandler: (n: React.SetStateAction<number>) => void;
}
const MovieCard = ({ movie, loadedHandler }: CardProps) => {
  return (
    <Link href={"/details/" + movie.id} key={movie.id}>
      <Card.Root maxW="sm" overflow="hidden" height="100%">
        <Image
          width="300px"
          height="450px"
          src={movie.poster_path}
          onLoad={() => loadedHandler((n) => n + 1)}
          onError={() => loadedHandler((n) => n + 1)}
        />
        <Card.Body gap="2">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Description>
            <DatePresenter dateString={movie?.release_date!} />
          </Card.Description>
          <Flex direction="column" height="100%" justify="space-between">
            <Flex marginY="2" gap="1" wrap="wrap" justify="left">
              {movie.genres?.map((genre) => (
                <Badge key={genre.id} variant="solid" colorPalette="purple">
                  {genre.name}
                </Badge>
              ))}
            </Flex>
            <Stars numericRating={movie?.vote_average!} />
          </Flex>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default MovieCard;
