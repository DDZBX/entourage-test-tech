import { createSlice } from "@reduxjs/toolkit"
import { Movie } from "../../interfaces/Movie"

interface MovieState {
  // Pourrait seulement etre un tableau de movieId, mais augmentrait le nombre de calls a l'API lors de l'affichage de la liste
  // Devrait etre persiste en DB
  watchList: Movie[]
  // Devrait etre persiste en DB
  // <MovieId, rating>
  ratings: Record<number, 1 | 2 | 3 | 4 | 5>
}

const initialState: MovieState = {
  watchList: [],
  ratings: [],
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
})

export const {} = movieSlice.actions

export default movieSlice.reducer
