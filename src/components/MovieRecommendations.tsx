import { Paper, Grid, Typography } from "@mui/material"
import {
  useGetMovieDetailsQuery,
  useGetMovieRecommendationsQuery,
  useGetTrendingQuery,
} from "../services/tmdb"

interface MovieRecommendationsProps {
  movieId: string
}

export const MovieRecommendations = (props: MovieRecommendationsProps) => {
  const { data, error, isLoading } = useGetMovieRecommendationsQuery(
    props.movieId,
  )

  console.log(data)

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  return <>Recommendations</>
}
