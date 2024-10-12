import React, { useMemo } from 'react'
import { useState } from 'react'


const Usememo = () => {
    const [count, setCount] = useState(10);
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const showmax = () => {
        console.log('testing');
        
       return Math.max(...arr, arr.length)

        
    }
    const umemo = useMemo(()=>showmax(), [arr]);
  return (
    <div>
        <h1>UseMemo</h1>
        <button onClick={() => setCount(count + 1)}>count</button><br /><br />
        <button onClick={()=> setArr([...arr, Math.round(count*Math.random())])}>My Click</button>
        <p>{count}</p>
        <p>{arr}</p>
        <p>{umemo}</p>

    </div>
  )
}

export default Usememo