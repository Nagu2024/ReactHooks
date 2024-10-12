import React, { useState, useRef, useEffect } from 'react'

const Useref = () => {

    // const [count, setCount] = useState(0);
    // const pref = useRef();
    // const inputref = useRef();
    // const colors = ['red', 'blue', 'green', 'black'];
    

    // const changeColor = () => {
    //     const randomColor = Math.floor(Math.random() * colors.length);
    //     pref.current.style.color = colors[randomColor];
    //     setCount(count + 1);
    // }

    // const inptext = () => {
    //     inputref.current.value = "";
    // }

    // use of useref
    // to find number of time page CanvasRendering
    // to find previous value
    // to manipulate html dom

    const [inputref, setinputref] = useState("");
    const count = useRef(0);
    const mysefef = useRef();
    useEffect(() => {
        count.current = count.current + 1
    },[])

    const myclik = () => {
        mysefef.current.focus();
    }
    
  return (
    <div>
        <h1>Useref</h1>

        {/* <p ref={pref}>Change the text color of this paragraph using useRef.</p>

        <p>Number of clicks: {count}</p>
        <button onClick={changeColor}>Change color</button><br /><br />
        <input ref={inputref}type="text" />
        <button onClick={inptext}>click me</button>
        <p>{inputref}</p> */}

        <p>Number of clicks: {count.current}</p>
        <input ref={mysefef} type="text" onChange={(e) => setinputref(e.target.value)} />
        <p>{inputref}</p>
        <button onClick={myclik}>click</button>
       
    </div>
  )
}

export default Useref