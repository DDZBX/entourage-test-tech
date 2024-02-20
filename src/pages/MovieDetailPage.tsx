import { useParams } from "react-router-dom"
import { MovieDetails } from "../components/MovieDetails"
import { MovieRecommendations } from "../components/MovieRecommendations"

export const MovieDetailPage = () => {
  const { movieId } = useParams()
  if (!movieId) {
    return <div>Error</div>
  }

  return (
    <>
      <MovieDetails movieId={movieId} />
      <MovieRecommendations movieId={movieId} />
    </>
  )
}
