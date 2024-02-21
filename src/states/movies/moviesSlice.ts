import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RatingNumber } from "../../interfaces/RatingNumber"
import { MovieRating } from "../../interfaces/MovieRating"

interface MovieState {
  // Devrait etre persiste en DB
  // Tableau de movieId pour facilement afficher les films qui sont en favoris
  favorites: number[]
  // Devrait etre persiste en DB
  // L'ideal serait de pouvoir utiliser une Map<number, RatingNumber>
  // pour garantir l'unicite mais c'est impossible avec redux-persist
  ratings: MovieRating[]
}

const initialState: MovieState = {
  favorites: [],
  ratings: [],
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const index = state.favorites.findIndex(i => i === action.payload)
      // Si le movieId n'est pas present dans favorites, on l'ajoute
      if (index === -1) {
        state.favorites.push(action.payload)
      }
      // Si le movieId est deja present, on le retire
      else {
        state.favorites.splice(index, 1)
      }
    },
    rateMovie: (state, action: PayloadAction<MovieRating>) => {
      const index = state.ratings.findIndex(
        movieRating => movieRating.movieId === action.payload.movieId,
      )
      // Si le film n'a jamais ete note, on ajoute un objet MovieRatings dans le tableau ratings
      if (index === -1) {
        state.ratings.push({
          movieId: action.payload.movieId,
          rating: action.payload.rating,
        })
      }
      // S'il a deja ete note, on modifie son rating
      else {
        state.ratings[index].rating = action.payload.rating
      }
    },
  },
})

export const { toggleFavorite, rateMovie } = movieSlice.actions

export default movieSlice.reducer
