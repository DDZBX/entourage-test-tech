import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { persistor, store } from "./states/store"
import { TrendingPage } from "./pages/TrendingPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Container } from "@mui/material"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Route } from "./interfaces/Route"
import { MoviesPage } from "./pages/MoviesPage"
import { MovieDetailPage } from "./pages/MovieDetailPage"
import { PersistGate } from "redux-persist/integration/react"
import { FavoritesMoviesPage } from "./pages/FavoritesMoviesPage"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TrendingPage />,
    },
    {
      path: "/movies",
      element: <MoviesPage />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetailPage />,
    },
    {
      path: "/favorites",
      element: <FavoritesMoviesPage />,
    },
  ])

  const routes: Route[] = [
    { title: "À la une", url: "/" },
    { title: "Mes Favoris", url: "/favorites" },
    { title: "Tous les films", url: "/movies" },
  ]

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container maxWidth="lg">
            <Header routes={routes} />
            <main>
              <RouterProvider router={router} />
            </main>
          </Container>
          <Footer />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
