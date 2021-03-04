import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'views/Home'
import Login from 'views/Login'
import SignUp from 'views/SignUp'
import ProductDetail from 'views/ProductDetail'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/product/:productId" component={ProductDetail} />
    </Switch>
  )
}

export default Routes
