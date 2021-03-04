import * as React from 'react'

const AUTH_CONTEXT_ERROR =
  'Authentication context not found. Have your wrapped your components with RootContext.Consumer?'

const AuthContext = React.createContext({
  signIn: (_credentials) => {
    throw new Error(AUTH_CONTEXT_ERROR)
  },
  signUp: (_user) => {
    throw new Error(AUTH_CONTEXT_ERROR)
  },
  signOut: () => {
    throw new Error(AUTH_CONTEXT_ERROR)
  }
})

export default AuthContext
