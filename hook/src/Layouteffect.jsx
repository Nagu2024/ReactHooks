import React, { useEffect, useState,useLayoutEffect } from 'react'

const Layouteffect = () => {
    const [inputdata, setInputdata] = useState('');
    useEffect(() => {
        console.log('useEffect');
        
    });
    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        
    });
  return (
    <div>
        <h1>Layouteffect</h1>
        <input type="text" onChange={(e) => setInputdata(e.target.value)} />
        <h1>{inputdata}</h1>

    </div>
  )
}

export default Layouteffect