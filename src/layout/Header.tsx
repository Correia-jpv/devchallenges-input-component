import React, { useContext } from 'react'

import { alpha, AppBar, Box, Container, Fab, IconButton, Toolbar, Typography } from '@mui/material'
import { DarkMode, LightMode, KeyboardArrowUp } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import Logo from '../assets/logo.png'
import ScrollTop from '../features/ScrollTop'

import { ThemeContext } from '../features/ThemeContext'

export default function Header() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' })
    } else {
      theme.dispatch({ type: 'DARKMODE' })
    }
  }

  const muiTheme = useTheme()

  return (
    <>
      <AppBar color="transparent" position="sticky" sx={{ backgroundColor: alpha(muiTheme.palette.background.paper, 0.7), backdropFilter: 'blur(20px)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="Your logo."
              src={Logo}
            />
            <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1, mx: 2 }}>
              devChallenges Input component with MUI
            </Typography>
            <IconButton onClick={onClick} color="inherit">
              {darkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <div id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  )
}
