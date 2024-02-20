import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../states/store"
import { useGetTrendingQuery } from "../services/tmdb"
import { Film } from "../interfaces/Film"

export const App = () => {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch<AppDispatch>()
  // const { data, error, isLoading } = useGetTrendingQuery(null)
  const { data, error, isLoading } = useGetTrendingQuery({})

  console.log(data)

  return (
    <div>
      {error ? (
        <div>Oh no, there was an error</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>{data.results.map((f: Film) => f.title)}</div>
      ) : (
        "null"
      )}
    </div>
  )
}
