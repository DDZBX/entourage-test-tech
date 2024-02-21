import { useGetMoviesByReleaseDateAscQuery } from "../services/tmdb"
import { MovieGrid } from "../components/MovieGrid"

export const MoviesPage = () => {
  const { data, error, isLoading } = useGetMoviesByReleaseDateAscQuery()

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  return <MovieGrid movies={data} />
}
