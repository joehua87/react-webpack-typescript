import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Hello } from './components/Hello'

export function App() {
  // const [counter, setCounter] = useState(0)
  return (
    <div>
      <Hello />
      {/* <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div> */}
    </div>
  )
}

export default hot(App)
