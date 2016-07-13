import React from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import routes from './routes'

const root = document.getElementById('root')

const Root = () => (
  <Router routes={routes} history={browserHistory} />
)

render(<Root/>, root)
