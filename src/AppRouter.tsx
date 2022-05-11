import React, { lazy, Suspense, useContext } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { ThemeContext } from './features/ThemeContext'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Footer from './layout/Footer'
import Header from './layout/Header'
import { CssBaseline } from '@mui/material'

import { SpinnerCircular } from 'spinners-react'

const App = lazy(() => import('./App'))

const light = createTheme({
    palette: {
      mode: 'light',
    },
  }),
  dark = createTheme({
    palette: {
      mode: 'dark',
    },
  })

const AppRouter = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <Router>
      <RecoilRoot>
        <ThemeProvider theme={darkMode ? dark : light}>
          <CssBaseline enableColorScheme />
          <Header />
          <Suspense fallback={<SpinnerCircular size={'30vh'} color={'grey'} secondaryColor={'transparent'} style={{ display: 'flex', margin: 'auto' }} />}>
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          </Suspense>
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </Router>
  )
}

/*
// TODO EE: To replace Recoil with Redux Toolkit;

import { Provider } from 'react-redux'
import store from './redux/store'

<Router>
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Provider>
</Router>

 */

/*

// TODO: EE: Without Recoil or Redux Toolkit;

// src/AppRouter.tsx

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

 */

export default AppRouter
