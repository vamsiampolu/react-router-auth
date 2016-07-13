import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import Logout from './components/Logout'
import About from './components/About'
import Dashboard, { requireAuth } from './components/Dashboard'
import NotFound from './components/NotFound'

const routes = (
<Route path='/' component={App}>
  <Route path='login' component={Login} />
  <Route path='logout' component={Logout} />
  <Route path='about' component={About} />
  <Route path='dashboard' component={Dashboard} onEnter={requireAuth} />
  <Route path='*' component={NotFound} />
</Route>
)

export default routes
