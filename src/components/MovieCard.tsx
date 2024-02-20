import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"
import { Movie } from "../interfaces/Movie"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, height: 300 }}>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
