import React from 'react'

import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
        
        <center>
          
           <h1>React Hooks</h1>
          
           
         </center>

         <Link to='/Usestateh'> <h3>1. Usestate Hook</h3></Link>
         <Link to='/Usereducer'><h3>2. Usereducer Hook</h3></Link>
         <Link to='/Effectuse'><h3>3. Effect Hook</h3></Link>
         <Link to='/Useref'><h3>4. UseRef Hook</h3></Link>
         <Link to='/Layouteffect'><h3>5. Layouteffect Hook</h3></Link>
         <Link to='/Usememo'><h3>6. UseMemo Hook</h3></Link>
         <Link to='/Usecallback'><h3>7. UseCallback Hook</h3></Link>

    </div>
  )
}

export default Home