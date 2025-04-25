import { useEffect, useState } from "react";
import Movie from "../interfaces/movie";
import axios, { CanceledError } from "axios";
import MovieDetails from "../interfaces/movie-details";
import Genre from "../interfaces/genre";
import DiscPageData from "../interfaces/disc-page-data";
const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const keyParam = import.meta.env.VITE_PARAM + import.meta.env.VITE_KEY;
const completeData = (genres: Genre[], movies: Movie[]) => {
  movies.map((movie) => {
    movie.genres = [] as Genre[];
    movie.genre_ids?.map((genreId) => {
      movie.genres!.push(genres.find((item) => item.id === genreId)!);
    });
    movie.poster_path =
      import.meta.env.VITE_IMG_URL + movie.poster_path + keyParam;
  });
};
const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [isGenreLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const controller = new AbortController();
    client
      .get(import.meta.env.VITE_GENRE_URL + keyParam, {
        signal: controller.signal,
      })
      .then((res) => {
        setGenre(res.data.genres);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
    return () => controller.abort();
  }, []);
  return { genres, isGenreLoading };
};

export const useMovies = (page: number, query: string) => {
  const [movies, setMovies] = useState<DiscPageData>();
  const [error, setError] = useState<string>();
  const [isMovieLoading, setLoading] = useState<boolean>(true);
  const url =
    query.length === 0
      ? import.meta.env.VITE_DISCOVER + keyParam
      : import.meta.env.VITE_SEARCH + keyParam + `&query=${query}`;
  useEffect(() => {
    const controller = new AbortController();
    client
      .get(`${url}&page=${page}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, [page, query]);
  return { movies, error, isMovieLoading };
};

export const useMovieDetail = (id: number) => {
  const [movie, setMovie] = useState<MovieDetails>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    const controller = new AbortController();
    client
      .get<MovieDetails>(import.meta.env.VITE_DETAILS + id + keyParam, {
        signal: controller.signal,
      })
      .then((res) => {
        res.data.poster_path =
          import.meta.env.VITE_IMG_URL + res.data!.poster_path + keyParam;
        res.data.backdrop_path =
          import.meta.env.VITE_BACKIMG_URL + res.data!.backdrop_path + keyParam;
        setMovie(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { movie, error };
};

export const useMovieData = (query: string = "") => {
  const [page, setPage] = useState(1);
  const { genres } = useGenres();
  const { movies, error } = useMovies(page, query);
  useEffect(() => {
    if (genres.length > 0 && movies) {
      completeData(genres, movies.results);
    }
  }, [genres, movies, page, query]);
  return { movies, error, page, setPage };
};
