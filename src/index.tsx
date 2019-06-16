import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootEl = document.getElementById('app')

ReactDOM.render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}
