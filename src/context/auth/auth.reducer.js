export const initialAuthState = {
  isLoading: false,
  isSignout: false,
  userToken: null,
  me: null,
  error: null
}

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      window.localStorage.setItem('token', action.token)
      return {
        ...prevState,
        isSignout: false,
        isLoading: false,
        error: null,
        userToken: action.token,
        me: action.me
      }
    case 'ERROR':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
        isLoading: false,
        error: action.error
      }
    case 'SIGN_OUT':
      window.localStorage.removeItem('token')
      return {
        ...prevState,
        isSignout: true,
        isLoading: false,
        userToken: null,
        me: null
      }
    case 'LOADING':
      return {
        ...prevState,
        isLoading: true
      }
  }
}
