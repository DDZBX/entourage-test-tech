import { Toolbar, Typography, Link } from "@mui/material"
import { Route } from "../interfaces/Route"

interface HeaderProps {
  routes: Route[]
}

export const Header = (props: HeaderProps) => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Hello Ciney
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
          marginBottom: 5,
        }}
      >
        {props.routes.map(route => (
          <Link
            color="inherit"
            noWrap
            key={route.title}
            variant="body2"
            href={route.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {route.title}
          </Link>
        ))}
      </Toolbar>
    </>
  )
}
