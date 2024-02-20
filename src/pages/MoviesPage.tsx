import { Grid } from "@mui/material"
import { MovieCard } from "../components/MovieCard"
import { Movie } from "../interfaces/Movie"
import { useGetMoviesByReleaseDateAscQuery } from "../services/tmdb"

export const MoviesPage = () => {
  const { data, error, isLoading } =
    useGetMoviesByReleaseDateAscQuery(undefined)

  console.log(data)

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  return (
    <Grid container spacing={2}>
      {data.map((m: Movie) => (
        <Grid key={m.id} item xs={8} lg={4} xl={3}>
          <MovieCard movie={m} />
        </Grid>
      ))}
    </Grid>
  )
}
