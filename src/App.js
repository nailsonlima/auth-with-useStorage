import React from 'react'
import GlobalStyle from './styles/global'
import { AuthProvider } from './contexts/auth'

import RoutesApp from './routes'

function App() {
  return (
    <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
    </AuthProvider>
  )
}

export default App