import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import UserPage from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'
import ExamplesPage from './pages/ExamplesPage'
import CombinedPage from './pages/CombinedPage'

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
    <Route
      path="/about_me"
      component={AboutMePage}
    />
    <Route
      path="/user"
      component={UserPage}
    />
    <Route
      path="/examples"
      exact
      component={ExamplesPage}
    />
    <Route
      path="/examples/:current"
      component={CombinedPage}
    />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
