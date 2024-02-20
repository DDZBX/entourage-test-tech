import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./states/store"
import { TrendingPage } from "./pages/TrendingPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Container } from "@mui/material"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Route } from "./interfaces/Routes"
import { MoviesPage } from "./pages/MoviesPage"
import { MovieDetailPage } from "./pages/MovieDetailPage"

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
  ])

  const routes: Route[] = [
    { title: "A la une", url: "/" },
    { title: "Tous les films", url: "/movies" },
  ]

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Container maxWidth="lg">
          <Header routes={routes} />
          <main>
            <RouterProvider router={router} />
          </main>
        </Container>
        <Footer />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
