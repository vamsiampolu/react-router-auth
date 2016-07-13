import React from 'react'
import auth from '../auth'

export function requireAuth (nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const Dashboard = () => {
  const token = auth.getToken()

  return (
  <div>
    <h1>Dashboard</h1>
    <p>
      You made it!
    </p>
    <p>
      {token}
    </p>
  </div>
  )
}

export default Dashboard
