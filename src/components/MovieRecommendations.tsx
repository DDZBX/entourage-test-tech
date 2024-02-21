import { Typography } from "@mui/material"
import { useGetMovieRecommendationsQuery } from "../services/tmdb"
import { MovieGrid } from "./MovieGrid"

interface MovieRecommendationsProps {
  movieId: string
}

export const MovieRecommendations = (props: MovieRecommendationsProps) => {
  const { data, error, isLoading } = useGetMovieRecommendationsQuery(
    props.movieId,
  )

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Recommande pour vous
      </Typography>
      {/* Il serait plus judicieux d'afficher un carousel horizontal ici, mais je reutilise un composant deja disponible */}
      <MovieGrid movies={data.slice(0, 4)} />
    </>
  )
}
