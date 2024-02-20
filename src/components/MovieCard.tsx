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
import VisibilityIcon from "@mui/icons-material/Visibility"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate()

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
        <CardContent>
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
          <Rating name="no-value" value={null} />
          <IconButton aria-label="delete" size="large">
            {/* <VisibilityIcon color="success" fontSize="inherit" /> */}
            <VisibilityIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}
