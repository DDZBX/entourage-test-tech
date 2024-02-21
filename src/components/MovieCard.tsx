import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Rating,
  CardActionArea,
  IconButton,
  Box,
} from "@mui/material"
import { Movie } from "../interfaces/Movie"
import { useNavigate } from "react-router-dom"
import defaultMovieImg from "../assets/default-movie.jpg"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../states/store"
import { rateMovie, toggleFavorite } from "../states/movies/moviesSlice"
import { RatingNumber } from "../interfaces/RatingNumber"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const favorites = useSelector((state: RootState) => state.movies.favorites)
  const ratings = useSelector((state: RootState) => state.movies.ratings)

  const isFavorite = favorites.indexOf(props.movie.id) !== -1
  const rating =
    ratings.find(rating => rating.movieId === props.movie.id)?.rating || null

  return (
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <CardActionArea
        onClick={() => {
          navigate(`/movie/${props.movie.id}`)
        }}
      >
        <CardMedia
          component="img"
          alt="movie image"
          height="140"
          image={props.movie.imageURL || defaultMovieImg}
        />
        <CardContent sx={{ minHeight: 150 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Rating
            value={rating}
            onChange={(_, newValue) => {
              if (newValue) {
                dispatch(
                  rateMovie({
                    movieId: props.movie.id,
                    rating: newValue as RatingNumber,
                  }),
                )
              }
            }}
          />

          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => dispatch(toggleFavorite(props.movie.id))}
          >
            {isFavorite ? (
              <FavoriteIcon color="error" fontSize="inherit" />
            ) : (
              <FavoriteIcon fontSize="inherit" />
            )}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}
