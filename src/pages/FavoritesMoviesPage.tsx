import { useSelector } from "react-redux"
import { RootState } from "../states/store"
import { useGetMoviesDetailsQuery } from "../services/tmdb"
import { MovieGrid } from "../components/MovieGrid"
import { Typography } from "@mui/material"

export const FavoritesMoviesPage = () => {
  const favorites = useSelector((state: RootState) => state.movies.favorites)
  const { data, error, isLoading } = useGetMoviesDetailsQuery(favorites)

  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else if (!data || data === undefined) {
    return <div>No Data</div>
  }

  if (!data.length) {
    return (
      <Typography align="center">
        Vous n'avez pas encore de favoris, essayez d'en ajouter depuis une autre
        page!
      </Typography>
    )
  }

  return <MovieGrid movies={data} />
}
