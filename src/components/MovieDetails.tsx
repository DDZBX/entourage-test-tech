import { Paper, Grid, Typography } from "@mui/material"
import { useGetMovieDetailsQuery, useGetTrendingQuery } from "../services/tmdb"

interface MovieDetailsProps {
  movieId: string
}

export const MovieDetails = (props: MovieDetailsProps) => {
  const { data, error, isLoading } = useGetMovieDetailsQuery(props.movieId)

  console.log(data)

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  return (
    <>
      <Paper elevation={2}>
        <img src={data.imageURL} alt="Affiche du film"></img>
        <img
          className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-o69gx8-MuiCardMedia-root"
          src="src/assets/default-movie.jpg"
          alt="movie image"
          height="140"
        ></img>
        <Grid container spacing={2} padding={5}>
          <Grid item xs={4}>
            <Typography>ID</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{data.id}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Titre</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{data.title}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
