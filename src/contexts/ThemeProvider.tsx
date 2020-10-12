import React, { createContext, useCallback, useContext, useState } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import themes from 'styles/themes'

import { Theme } from '../@types/styles'
import GlobalStyles from '../styles/global'

interface ThemeContextData {
  currentTheme: Theme
  ChangeTheme(): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.defaultTheme)

  const ChangeTheme = useCallback(() => {
    setCurrentTheme(themes.defaultTheme)
    console.log(currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, ChangeTheme }}>
      <StyledThemeContext.Provider value={currentTheme}>
        {children}
        <GlobalStyles />
      </StyledThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must to be used inside themeProvider')
  }

  return context
}

export { ThemeProvider, useTheme }
