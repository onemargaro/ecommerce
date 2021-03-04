export const initialProductState = {
  isLoading: false,
  products: null,
  error: null
}

export const productsReducer = (prevState, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...prevState,
        products: action.products,
        isLoading: false
      }
    case 'ERROR':
      return {
        ...prevState,
        error: action.error,
        isLoading: false
      }
    case 'LOADING':
      return {
        ...prevState,
        isLoading: true
      }
  }
}
