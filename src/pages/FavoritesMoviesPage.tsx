import { useParams } from "react-router-dom"

export const FavoritesMoviesPage = () => {
  const { movieId } = useParams()
  if (!movieId) {
    return <div>Error</div>
  }

  return <></>
}
