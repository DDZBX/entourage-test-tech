import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"
import { Movie } from "../interfaces/Movie"
import { useNavigate } from "react-router-dom"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <CardMedia
        component="img"
        alt="movie image"
        height="140"
        image={props.movie.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/movie/${props.movie.id}`)
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  )
}
