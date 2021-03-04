import React from 'react'
import {
  Field,
  Control,
  Label,
  Input
} from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Box from 'react-bulma-components/lib/components/box'
import Button from 'react-bulma-components/lib/components/button'
import AuthContext from 'context/auth/auth.context'
import { Link } from 'react-router-dom'

const Login = () => {
  // TODO: remove test data
  const [user, setUser] = React.useState({
    email: 'margaro@holia123.com',
    password: 'heybro'
  })
  const { signIn } = React.useContext(AuthContext)
  const onChange = (event) => {
    const {
      target: { name, value }
    } = event
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <Container>
      <Box>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input
              value={user.email}
              onChange={onChange}
              name="email"
              type="email"
              placeholder="Email@domain.com"
            />
          </Control>
        </Field>
        <Field>
          <Label>Password</Label>
          <Control>
            <Input
              value={user.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Control>
        </Field>
        <Field className="is-flex">
          <Control>
            <Button
              type="primary"
              color="primary"
              rounded
              onClick={() => signIn(user)}
            >
              Submit
            </Button>
          </Control>
        </Field>
        <Link to="sign-up">Register</Link>
      </Box>
    </Container>
  )
}

export default Login
