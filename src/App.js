import React from 'react'
import { useSelector } from 'react-redux'

import { ThemeProvider} from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider} from '@mui/material'

import NavigationScroll from './layout/NavigationScroll'
import themes from './themes'
import Routes from './routes'

const App = () => {
  const customization = useSelector((state) => state.customization)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
export default App;
