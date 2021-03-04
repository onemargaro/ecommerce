import Button from 'react-bulma-components/lib/components/button'
import Card from 'react-bulma-components/lib/components/card'
import Columns from 'react-bulma-components/lib/components/columns'
import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'
import Heading from 'react-bulma-components/lib/components/heading'
import Loading from 'components/Loading'
import Media from 'react-bulma-components/lib/components/media'
import React from 'react'
import Tag from 'react-bulma-components/lib/components/tag'
import axios from 'axios'
import { BASE_URL } from 'configuration'
import { useParams, useHistory } from 'react-router-dom'

const ProductDetail = () => {
  const [state, setState] = React.useState({
    product: null,
    isLoading: null,
    error: null
  })
  // TODO: remove this and creates a way to know about auth user
  const isAuthorized = window.localStorage.getItem('token')
  const history = useHistory()
  const { productId } = useParams()
  // eslint-disable-next-line space-before-function-paren
  React.useEffect(async () => {
    try {
      setState({
        ...state,
        isLoading: true
      })
      const { data } = await axios.get(`${BASE_URL}/api/v1/item/${productId}`)
      setState({
        ...state,
        isLoading: false,
        product: data
      })
    } catch (error) {
      setState({
        ...state,
        error
      })
    }
  }, [])
  if (state.isLoading || !state.product) {
    return <Loading />
  }

  const {
    image,
    product_name: name,
    brand,
    category,
    price,
    description
  } = state.product

  return (
    <>
      <Container>
        <Columns>
          <Columns.Column size={6}>
            <Card>
              <Card.Image size="4by3" src={image} />
            </Card>
          </Columns.Column>
          <Columns.Column size={6}>
            <Card>
              <Card.Content>
                <Media>
                  <Media.Item>
                    <Heading size={4}>{name}</Heading>
                    <Heading subtitle size={6}>
                      <Tag.Group gapless>
                        <Tag color="primary">{brand}</Tag>
                        <Tag color="info">{category} </Tag>
                      </Tag.Group>
                      <span className="is-size-4">${price}</span>
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>{description}</Content>
              </Card.Content>
              <Card.Footer>
                <Card.Footer.Item>
                  <Button type="primary" color="primary">
                    Add to Car
                  </Button>
                </Card.Footer.Item>
                <Card.Footer.Item>
                  {isAuthorized ? (
                    <Button type="primary" color="primary">
                      Buy
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      color="primary"
                      onClick={() => {
                        history.push('/ecommerce/login')
                      }}
                    >
                      Login and Buy
                    </Button>
                  )}
                </Card.Footer.Item>
              </Card.Footer>
            </Card>
          </Columns.Column>
        </Columns>
      </Container>
    </>
  )
}

export default ProductDetail
