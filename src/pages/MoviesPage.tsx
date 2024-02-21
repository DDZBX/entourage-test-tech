import { Grid } from "@mui/material"
import { MovieCard } from "../components/MovieCard"
import { Movie } from "../interfaces/Movie"
import { useGetMoviesByReleaseDateAscQuery } from "../services/tmdb"
import { MovieGrid } from "../components/MovieGrid"

export const MoviesPage = () => {
  const { data, error, isLoading } =
    useGetMoviesByReleaseDateAscQuery(undefined)

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  return <MovieGrid movies={data} />
}
