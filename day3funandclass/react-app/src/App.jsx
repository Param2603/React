import React, { useEffect, useState } from 'react'
import ("./App.css")


function App() {
  let [count, setCount] = useState(JSON.parse(localStorage.getItem("local")) || 0
  );

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(count))
  }, [count])

  return (
    <div>
      <h1>Counter Application</h1>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count == 0} onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App