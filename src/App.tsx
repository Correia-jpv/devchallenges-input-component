import React, { useContext } from 'react'

import { ThemeContext } from './features/ThemeContext'

import { Grid, Divider, Typography, Container } from '@mui/material'
import { Phone, Lock } from '@mui/icons-material'

import Input from './components/Input'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './App.scss'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <Container>
      <Grid container spacing={2} sx={{ textAlign: 'center', maxWidth: 'lg' }}>
        {/* Default, error, disabled */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Default, Error & Disabled'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Input />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Input error />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input error />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Input disabled />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input disabled />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Helper text */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Helper text'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Input helperText="Some interesting text" />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input helperText="Some interesting text" />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input helperText="Some interesting text" error />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input helperText="Some interesting text" error />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Icons */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Icons'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Input startIcon={<Phone />} />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input startIcon={<Phone />} />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input endIcon={<Lock />} />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input endIcon={<Lock />} />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Size */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Size'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Input size="small" />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input size="small" />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Color */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Color'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Input color="secondary" />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input color="secondary" />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Full width */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Full width'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Input fullWidth />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input fullWidth />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Multiline */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Multiline'}
            </Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Input multiline rows={4} />
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Input multiline rows={4} />'}
          </SyntaxHighlighter>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
