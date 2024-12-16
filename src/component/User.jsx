import { useState } from "react";
import React from 'react'
import {createStore} from "redux";

function User({props}) {

  const [value, setValue] = useState("")

  // third. it is a reducer callback function where we put two paremeter. the value keyword is use here which is writeen with state in the parameter thatv alue is a initial state of the usestate hook.
  const reducer = (state=value, action)=>{
    if(action.type=='login'){
      return state = "login success";
    }
    else{
      return state = "login failed";
    }
  }

  // first. we create a variable where we store the createStore function which is carry a callback function which is reducer here.which is show above.
  const store = createStore(reducer);
  // we use the store to get the state of the reducer
  

  store.subscribe(
    ()=>{
      // alert(store.getState());
        setValue(store.getState())
    }
  )

  return (
    <div>
      <h1 className='fw-bold text-center text-warning'>CNC WEB WORLD - {props}</h1>
      <h2>{value}</h2>
      <button className='btn btn-danger fw-bold' onClick={
        // second.
        ()=>store.dispatch({
          type: 'login' // action
        })
      }>Login</button>
    </div>
  )
}

export default User
