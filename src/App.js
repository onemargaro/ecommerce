import AuthContext from 'context/auth/auth.context'
import Container from 'react-bulma-components/lib/components/container'
import Header from 'components/Header'
import Loading from 'components/Loading'
import Heading from 'react-bulma-components/lib/components/heading'
import React from 'react'
import Routes from 'routes'
import axios from 'axios'
import { BASE_URL } from 'configuration'
import { authReducer, initialAuthState } from 'context/auth/auth.reducer'

const App = () => {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState)
  const authContextValue = React.useMemo(
    () => ({
      // eslint-disable-next-line space-before-function-paren
      signIn: async (credentials) => {
        try {
          dispatch({ type: 'LOADING' })
          const { data: dataToken } = await axios.post(
            `${BASE_URL}/api/v1/login`,
            credentials
          )
          const { data: dataMe } = await axios.get(
            `${BASE_URL}/api/v1/user/me`,
            {
              headers: {
                Authorization: `JWT ${dataToken.token}`
              }
            }
          )
          dispatch({ type: 'SIGN_IN', token: dataToken.token, me: dataMe.user })
        } catch (error) {
          dispatch({ type: 'ERROR', error })
        }
      },
      // eslint-disable-next-line space-before-function-paren
      signUp: async (newUser) => {
        try {
          dispatch({ type: 'LOADING' })
          await axios.post(`${BASE_URL}/api/v1/signup`, newUser)
          const credentials = {
            email: newUser.email,
            password: newUser.password
          }
          const { data: dataToken } = await axios.post(
            `${BASE_URL}/api/v1/login`,
            credentials
          )
          const { data: dataMe } = await axios.get(
            `${BASE_URL}/api/v1/user/me`,
            {
              headers: {
                Authorization: `JWT ${dataToken.token}`
              }
            }
          )
          dispatch({ type: 'SIGN_IN', token: dataToken.token, me: dataMe.user })
        } catch (error) {
          dispatch({ type: 'ERROR', error })
        }
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' })
    }),
    []
  )

  // eslint-disable-next-line space-before-function-paren
  React.useEffect(async () => {
    try {
      const token = window.localStorage.getItem('token')
      if (token) {
        dispatch({ type: 'LOADING' })
        const { data: dataMe } = await axios.get(`${BASE_URL}/api/v1/user/me`, {
          headers: {
            Authorization: `JWT ${token}`
          }
        })
        dispatch({ type: 'SIGN_IN', token, me: dataMe.user })
      }
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }
  }, [])
  if (state.isLoading) {
    return <Loading />
  }

  if (state.error) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <span className="bd-notification is-danger">
          <Heading subtitle renderAs="p">
            Error: {state.error.message}
          </Heading>
        </span>
      </Container>
    )
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {state.me ? <Header user={state.me} /> : <Header />}
      <Routes />
    </AuthContext.Provider>
  )
}

export default App
