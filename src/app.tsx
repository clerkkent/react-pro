import * as React from 'react'
import { render } from 'react-dom'

import Router from './router/router'
import './scss/index'
render(
  <Router />,
  document.getElementById('root')
)