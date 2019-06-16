import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Hello } from '~/components/Hello'

export function App() {
  return (
    <div>
      <Hello />
    </div>
  )
}

export default hot(App)
