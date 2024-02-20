import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../states/store"
import { useGetTrendingQuery } from "../services/tmdb"
import { Movie } from "../interfaces/Movie"
import { TrendingMovies } from "../components/TrendingMovies"
import { Container, Grid } from "@mui/material"

export const App = () => {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch<AppDispatch>()
  // const { data, error, isLoading } = useGetTrendingQuery(null)

  return (
    <>
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <TrendingMovies />
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </>
  )
}
