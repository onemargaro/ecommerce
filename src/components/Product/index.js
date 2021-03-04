import Card from 'react-bulma-components/lib/components/card'
import Content from 'react-bulma-components/lib/components/content'
import Heading from 'react-bulma-components/lib/components/heading'
import Media from 'react-bulma-components/lib/components/media'
import PropTypes from 'prop-types'
import React from 'react'
import Tag from 'react-bulma-components/lib/components/tag'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  const {
    _id,
    image,
    product_name: name,
    price,
    brand,
    category,
    description
  } = props
  return (
    <Card>
      <Card.Image size="4by3" src={image} />
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
        <Card.Footer.Item renderAs="span">
          <Link to={`/ecommerce/product/${_id}`}>Details</Link>
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="span">Buy</Card.Footer.Item>
      </Card.Footer>
    </Card>
  )
}

ProductCard.propTypes = {
  brand: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  product_name: PropTypes.string,
  _id: PropTypes.string
}

export default ProductCard
