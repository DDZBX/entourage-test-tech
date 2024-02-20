import { Box, CssBaseline, Container, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography gutterBottom textAlign={"center"}>
          Dorian PIZZATO - Entourage
        </Typography>
      </Container>
    </Box>
  )
}
