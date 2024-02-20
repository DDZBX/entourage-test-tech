import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Movie } from "../interfaces/Movie"

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
        if (!response || !response.results) return []
        const moviesResult: Movie[] = []
        response.results.forEach((movie: any) => {
          const currentImageURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          const currentMovie: Movie = {
            id: movie.id,
            title: movie.title,
            imageURL: currentImageURL,
          }
          moviesResult.push(currentMovie)
        })
        return moviesResult
      },
    }),

    // GET movies by release date asc
    // On aurait pu ajouter un param 'sort_by' mais on n'utilise qu'une seule fois cette route
    getMoviesByReleaseDateAsc: builder.query({
      query: () => ({
        url: "discover/movie",
        params: [
          { include_adult: "false" },
          { include_video: "false" },
          { language: "fr-FR" },
          { page: "1" },
          { sort_by: "primary_release_date.asc" },
        ],
      }),
    }),

    // GET movie details
    getMovieDetails: builder.query({
      query: (movieId: string) => `movie/${movieId}`,
    }),

    // GET movie recommendations
    getMovieRecommendations: builder.query({
      query: (movieId: string) => `movie/${movieId}/recommendations`,
    }),
  }),
})

export const {
  useGetTrendingQuery,
  useGetMoviesByReleaseDateAscQuery,
  useGetMovieDetailsQuery,
  useGetMovieRecommendationsQuery,
} = tmdbApi
