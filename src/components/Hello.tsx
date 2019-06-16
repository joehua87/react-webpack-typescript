import * as React from 'react'

export interface HelloProps {
  compiler?: string
  framework?: string
}

export const Hello = (props: HelloProps) => {
  const [counter, setCounter] = React.useState(0)
  return (
    <h1>
      <div>
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
