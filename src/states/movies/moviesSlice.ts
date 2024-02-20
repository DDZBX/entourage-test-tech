// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { Film } from "../../interfaces/Film"
// import { getTrendingMovies } from "../../queries/getTrendingMovies"

// interface CounterState {
//   tendingMovies: Film[]
// }

// const initialState: CounterState = {
//   tendingMovies: [],
// }

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(
//       getTrendingMoviesAsyc.fulfilled,
//       (state, action: PayloadAction<void>) => {
//         state.tendingMovies = action.payload
//       },
//     )
//   },
// })

// export const getTrendingMoviesAsyc = createAsyncThunk(
//   "movies/getTrendingMoviesAsyc",
//   async () => {
//     await fetch("https://api.example.com/data")
//       .catch(error => console.log(error))
//       .then(response => console.log(response))
//       .then(data => {
//         return data
//       })
//   },
// )

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer
