import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'views/Home'
import Login from 'views/Login'
import SignUp from 'views/SignUp'
import ProductDetail from 'views/ProductDetail'
import CreateProduct from 'views/CreateProduct'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/ecommerce/" component={Home} />
      <Route path="/ecommerce/sign-up" component={SignUp} />
      <Route path="/ecommerce/login" component={Login} />
      <Route path="/ecommerce/product/:productId" component={ProductDetail} />
      <Route path="/ecommerce/create-product" component={CreateProduct} />
    </Switch>
  )
}

export default Routes
