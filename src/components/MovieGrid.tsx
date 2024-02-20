import { Grid } from "@mui/material"
import { Movie } from "../interfaces/Movie"
import { MovieCard } from "./MovieCard"

interface MovieGridProps {
  movies: Movie[]
}

export const MovieGrid = (props: MovieGridProps) => {
  return (
    <Grid container spacing={2}>
      {props.movies.map((m: Movie) => (
        <Grid key={m.id} item xs={8} lg={4} xl={3}>
          <MovieCard movie={m} />
        </Grid>
      ))}
    </Grid>
  )
}
