import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Movie } from "../interfaces/Movie"
import { ApiResponseToMovie, ApiResponseToMovies } from "../utils/parsing"

// Devrait etre defini dans un fichier .env
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWU3NjI1MDhlMGViMmU0YmViODY5OTA4OWMzM2RlZiIsInN1YiI6IjY1ZDNmZTkyYmJjYWUwMDE4MjA0MmRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rzJfXbISCyal5vDSv-_vSuiLOnt9D5VOO0NcOuueMQk"

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }),

  endpoints: builder => ({
    // GET trending
    getTrending: builder.query<Movie[], undefined>({
      query: () => ({
        url: "/trending/movie/day",
        params: { language: "fr-FR" },
      }),
      // Il serait bon de creer une interface de retour de l'API pour etre type safe
      transformResponse: (response: any): Movie[] => {
        return ApiResponseToMovies(response)
      },
    }),

    // GET movies by release date asc
    // On aurait pu ajouter un param 'sort_by' mais on n'utilise qu'une seule fois cette route
    getMoviesByReleaseDateAsc: builder.query<Movie[], undefined>({
      query: () => ({
        url: "discover/movie",
        params: {
          include_adult: "false",
          include_video: "false",
          language: "fr-FR",
          page: "1",
          sort_by: "primary_release_date.asc",
        },
      }),
      transformResponse: (response: any): Movie[] => {
        return ApiResponseToMovies(response)
      },
    }),

    // GET movie details
    getMovieDetails: builder.query<Movie, string>({
      query: (movieId: string) => ({
        url: `movie/${movieId}`,
        params: {
          language: "fr-FR",
        },
      }),
      transformResponse: (response: any): Movie => {
        return ApiResponseToMovie(response)
      },
    }),

    // GET movie recommendations
    getMovieRecommendations: builder.query<Movie[], string>({
      query: (movieId: string) => ({
        url: `movie/${movieId}/recommendations`,
        params: {
          language: "fr-FR",
        },
      }),
      transformResponse: (response: any): Movie[] => {
        return ApiResponseToMovies(response)
      },
    }),
  }),
})

export const {
  useGetTrendingQuery,
  useGetMoviesByReleaseDateAscQuery,
  useGetMovieDetailsQuery,
  useGetMovieRecommendationsQuery,
} = tmdbApi
