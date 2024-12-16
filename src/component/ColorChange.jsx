import React, { useState } from "react";
import { createStore } from "redux";

function ColorChange() {

  //3.
  const [style, setStyle] = useState({color:""});


  //2.
  const reducer = (state={}, action)=>{ //the datatype is object of state here.
    if(action.type=="red"){
      return state = {
        color:"red"
      }
    }
    else if(action.type=="green"){
      return state = {
        color:"green"
      }
    }
    else if(action.type=="yellow"){
      return state = {
        color:"yellow"
      }
    }
    else if(action.type=="blue"){
      return state = {
        color:"blue"
      }
    }    
  }
  // 1.
  const store = createStore(reducer);

  //4.
  store.subscribe(
    ()=>{
      const res = store.getState();
      setStyle(res)
    }
  )
  return (
    <div>
      <h1 className="text-center fw-bold py-5 " style={style}>
        Color Change
      </h1>
      {/* <select className='form-control' onChange={(e)=>{console.log(e.target.value)}}> */}

      <select
        className="form-control"
        onChange={(e) => {
        // 2.
          store.dispatch(
            {
              type: e.target.value,
              }
          );
        }}
      >
        <option value="red">Red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
}

export default ColorChange;
