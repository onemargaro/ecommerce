import React from 'react'
import {
  Field,
  Control,
  Label,
  Input,
  Select
} from 'react-bulma-components/lib/components/form'
import Container from 'react-bulma-components/lib/components/container'
import Box from 'react-bulma-components/lib/components/box'
import Button from 'react-bulma-components/lib/components/button'
import AuthContext from 'context/auth/auth.context'

const SignUp = () => {
  // TODO: remove test data
  const [user, setUser] = React.useState({
    email: 'holi@mail.com',
    first_name: 'John',
    last_name: 'Doe',
    password: 'holi123',
    role: 'CUSTOMER'
  })
  const { signUp } = React.useContext(AuthContext)
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
    <Container className="is-flex is-justify-content-center">
      <Box>
        <Field>
          <Label>First Name</Label>
          <Control>
            <Input
              value={user.first_name}
              onChange={onChange}
              name="first_name"
              type="text"
              placeholder="John"
            />
          </Control>
        </Field>
        <Field>
          <Label>Last Name</Label>
          <Control>
            <Input
              value={user.last_name}
              onChange={onChange}
              name="last_name"
              type="text"
              placeholder="Doe"
            />
          </Control>
        </Field>
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
              type="password"
              placeholder="Password"
            />
          </Control>
        </Field>
        <Field>
          <Label>Role</Label>
          <Control>
            <Select value={user.role} onChange={onChange} name="role">
              <option value="CUSTOMER">CUSTOMER</option>
              <option value="ADMIN">ADMIN</option>
            </Select>
          </Control>
        </Field>

        <Field kind="group">
          <Control className="is-flex is-justify-content-end">
            <Button
              color="primary"
              rounded
              type="primary"
              onClick={() => signUp(user)}
            >
              Create
            </Button>
          </Control>
        </Field>
      </Box>
    </Container>
  )
}

export default SignUp
