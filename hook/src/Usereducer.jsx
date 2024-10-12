import React, { useReducer } from 'react'

// const Initialstate = {count:0 showtext:true}

// const reducer = (state, action) => {

//   console.log(state);
//   console.log(action);
  


//     switch (action.type) {
//       case "increment":
//         return{...state, count:state.count+1}
//       case "toogle":
//         return{...state, showtext:!state.showtext}
//       case "sdecrement":
//         return{...state, count:state.count-1}
//       default:
//         return state;
//     }

// }

// const Usereducer = () => {
//   const [state, dispatch] = useReducer(reducer,Initialstate)
//   return (
//     <div>
//         <h1>{state.count}</h1>
//         <button onClick={() => {dispatch({type:"increment" });
//                                 dispatch({type:"toogle"});
//                                 }}>Click Me</button>
//         <button onClick={() => {dispatch({type:"sdecrement"});
//                                 dispatch({type:"toogle"})}}>Decrement</button>
//         {state.showtext && <p>Show the text</p>}
//         <br /><br />
       
//     </div>
//   )
// }
const intitialstate = {
  count:0,
  color:false,
  usettext:''
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'increment':
      return {...state, count:state.count+1}
    case 'decrement':
      return {...state, count:state.count-1}
    case 'color':
      return {...state, color:!state.color}
    case 'usettext':
      return {...state, usettext:action.payload}
    default:
      return state;
  }

}

const Usereducer = () => {

  const[state, dispatch] = useReducer(reducer, intitialstate)
 
  return (
    <div style={{color:state.color ? "red" : "blue"}}>
        <button onClick={() => dispatch({type:"decrement"})}>Minus</button>{state.count}<button onClick={() => dispatch({type:"increment"})}>Plus</button><br /><br />
        <button onClick={() => dispatch({type:"color"})}>color</button><br /><br />
        <input type="text" onChange={(e)=>{dispatch({type:"usettext", payload:e.target.value})}} /> <br /><br />
        <p>{state.usettext}</p>
        
    </div>
  )
}

export default Usereducer



// const reducer = (state, action) => {

//   if (action.type === "increment") {
//     return state + 1
//   }
//   if (action.type === "decrement") {
//     return state - 1
//   }
//   return state
  
// }
// const Usereducer = () => {
//     const [count, dispatch] = useReducer(reducer, 0)
//     return (
//       <div>
//           <button style={{padding:"10px"}} onClick={()=>dispatch({type:"decrement"})}>Minus</button>{count}
//           <button style={{padding:"10px"}} onClick={()=>dispatch({type:"increment"})}>Plus</button>
//       </div>
//     )
//   }

// export default Usereducer