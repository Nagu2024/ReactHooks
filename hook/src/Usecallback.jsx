import React, { useCallback } from 'react'
import { useState } from 'react'
import Usecall from './Usecall'

const Usecallback = () => {
    const[count, setCount] = useState(0);
    const[product, setProduct] = useState(['product1', 'product2'])
    const[cart, setCart] = useState(0)
    const addcart = useCallback( () => {
      setCart(cart+1)
    },[cart])
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button><br /><br /><br />
        <h1>Count - {cart}</h1>
        {product.map((p,i)=> {return <Usecall addcart={addcart} product={p} key={i}/>})}
        
    </div>
  )
}

export default Usecallback