import React from 'react'
import Navbar from 'react-bulma-components/lib/components/navbar'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthContext from 'context/auth/auth.context'

const Header = (props) => {
  const { signOut } = React.useContext(AuthContext)
  return (
    <Navbar color="primary" fixed="top">
      <Navbar.Brand>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item renderAs="span">
            <Link to="/">Home</Link>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          {props && props.user ? (
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link>
                {props.user.first_name} {props.user.last_name}
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>{props.user.role}</Navbar.Item>
                <Navbar.Item onClick={() => signOut()}>Log out</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          ) : (
            <Navbar.Item renderAs="span">
              <Link to="/ecommerce/login">Login</Link>
            </Navbar.Item>
          )}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
    isActive: PropTypes.bool,
    _id: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
  })
}

export default Header
