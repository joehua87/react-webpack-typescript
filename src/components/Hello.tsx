import React from 'react'
import { useState } from 'react'

import { card } from '../styles'

export interface HelloProps {
  compiler?: string
  framework?: string
}

export const Hello = (props: HelloProps) => {
  const [counter, setCounter] = useState(0)
  return (
    <h1>
      <div css={card}>
        Hello from {props.compiler} and {props.framework}
      </div>
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
    </h1>
  )
}
