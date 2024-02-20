import { Movie } from "../interfaces/Movie"

const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original"

export const ApiResponseToMovies = (apiResponse: any): Movie[] => {
  if (!apiResponse || !apiResponse.results) return []
  const moviesResult: Movie[] = []
  apiResponse.results.forEach((movie: any) => {
    const movieImage =
      movie.backdrop_path !== null
        ? `${TMDB_BASE_IMAGE_URL}${movie.backdrop_path}`
        : null
    const currentMovie: Movie = {
      id: movie.id,
      title: movie.title,
      imageURL: movieImage,
    }
    moviesResult.push(currentMovie)
  })
  return moviesResult
}

export const ApiResponseToMovie = (apiResponse: any): Movie => {
  const movieImage =
    apiResponse.backdrop_path !== null
      ? `${TMDB_BASE_IMAGE_URL}${apiResponse.backdrop_path}`
      : null
  const movie: Movie = {
    id: apiResponse.id,
    title: apiResponse.title,
    imageURL: movieImage,
  }
  return movie
}
