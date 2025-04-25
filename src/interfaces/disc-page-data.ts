import Movie from "./movie";

export default interface DiscPageData{
    page: number;
    total_pages: number;
    total_results: number;
    results: Movie[];
}