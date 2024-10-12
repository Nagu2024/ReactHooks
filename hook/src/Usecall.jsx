import React from 'react'


const Usecall = React.memo(({product, addcart}) => {
    console.log(`${product} is rendering`);
    
  return (
    <div style={{border:"1px solid black", padding:"25px", display:"inline"}}>{product} <button onClick={addcart}>click 1</button> </div>
  )
})

export default Usecall