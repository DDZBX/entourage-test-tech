import { Movie } from "../interfaces/Movie"

export const ApiResponseToMovies = (apiResponse: any): Movie[] => {
  if (!apiResponse || !apiResponse.results) return []
  const moviesResult: Movie[] = []
  apiResponse.results.forEach((movie: any) => {
    const movieImage =
      movie.backdrop_path !== null
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : "src/assets/default-movie.jpg"
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
  //  if (!apiResponse) return null
  const movieImage =
    apiResponse.backdrop_path !== null
      ? `https://image.tmdb.org/t/p/w500${apiResponse.backdrop_path}`
      : "src/assets/default-movie.jpg"
  const movie: Movie = {
    id: apiResponse.id,
    title: apiResponse.title,
    imageURL: movieImage,
  }
  return movie
}
