import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AcUnitIcon from '@mui/icons-material/AcUnit'

export default function Home() {
  return (
    <section>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AcUnitIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href='/'

            >
              NASA
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  )
}
