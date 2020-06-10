import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'

import HomePage from './pages/HomePage'

const Routing = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={HomePage}
    />
    <Route
      path="/home"
      component={HomePage}
    />
  </Switch>
)

export default Routing
