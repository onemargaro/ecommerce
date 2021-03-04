import React from 'react'
import axios from 'axios'
import { BASE_URL } from 'configuration'
import Loading from 'components/Loading'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import ProductCard from 'components/Product'
import {
  initialProductState,
  productsReducer
} from 'context/products/products.reducer'
import {
  Field,
  Control,
  Label,
  Input
} from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'

const Home = () => {
  const [state, dispatch] = React.useReducer(
    productsReducer,
    initialProductState
  )

  const [search, setSearch] = React.useState('')

  // eslint-disable-next-line space-before-function-paren
  const searchProduct = async () => {
    dispatch({ type: 'LOADING' })
    const { data } = await axios.get(`${BASE_URL}/api/v1/item`)
    if (search === '') {
      return dispatch({ type: 'LOAD_PRODUCTS', products: data })
    }
    return dispatch({
      type: 'LOAD_PRODUCTS',
      products: data.filter((product) =>
        product.product_name.toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  const onChange = (event) => {
    const {
      target: { value }
    } = event
    setSearch(value)
  }

  // eslint-disable-next-line space-before-function-paren
  React.useEffect(async () => {
    try {
      dispatch({ type: 'LOADING' })
      const { data } = await axios.get(`${BASE_URL}/api/v1/item`)
      dispatch({ type: 'LOAD_PRODUCTS', products: data })
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }
  }, [])
  if (state.isLoading) {
    return <Loading />
  }
  return (
    <Container>
      <Columns>
        <Columns.Column size={10}>
          <Field>
            <Label>Search</Label>
            <Control>
              <Input
                color="info"
                value={search}
                onChange={onChange}
                name="search"
                type="search"
                placeholder="Product name"
              />
            </Control>
          </Field>
        </Columns.Column>
        <Columns.Column
          size={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '2.5em'
          }}
        >
          <Field>
            <Control>
              <Button
                type="primary"
                color="primary"
                rounded
                onClick={() => searchProduct()}
              >
                Search
              </Button>
            </Control>
          </Field>
        </Columns.Column>
        {state.products &&
          state.products.map((product) => (
            <Columns.Column key={product._id} size={4}>
              <ProductCard {...product} />
            </Columns.Column>
          ))}
      </Columns>
    </Container>
  )
}

export default Home
