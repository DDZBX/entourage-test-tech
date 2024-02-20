import { Grid } from "@mui/material"
import { useGetTrendingQuery } from "../services/tmdb"
import { MovieCard } from "./MovieCard"
import { Movie } from "../interfaces/Movie"

export const TrendingMovies = () => {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch<AppDispatch>()
  // const { data, error, isLoading } = useGetTrendingQuery(null)
  const { data, error, isLoading } = useGetTrendingQuery(undefined)

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
        <Grid item xs={8} lg={4} xl={3}>
          <MovieCard movie={m} />
        </Grid>
      ))}
    </Grid>
  )
}
