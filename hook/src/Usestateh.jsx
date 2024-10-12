import React, { useState } from 'react'

const Usestateh = () => {
    const [count, setCount] = useState(0);
    const [inputvalue, setInputvalue] = useState("nagesh");
    const increment = () => setCount(count+1)
    const decrement = () => count > 0 && setCount(count-1)
  return (
    <div>
        <h1>{count}</h1> <button onClick={increment}>Plus</button>
        <button style={{marginLeft:"10px"}} onClick={decrement}>Minus</button>
        <br /><br /><br />
        <input onChange={(e) => setInputvalue(e.target.value)} type="text" /> <h1>{inputvalue}</h1>
    </div>
  )
}

export default Usestateh