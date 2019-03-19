import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { view as Login } from '$pages/login'

import history from './history'

class RouterMap extends Component {

  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default RouterMap