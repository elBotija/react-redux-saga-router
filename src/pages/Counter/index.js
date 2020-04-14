import React, { useEffect, useState, useCallback } from 'react'

const functions = new Set()

export default () => {

  const [counter, setCounter] = useState(0)
  const handlerCounterClick = useCallback(action => {
    console.log(action)
    setCounter(counter + action)
  },[counter])

  const doSomething = useCallback(() => {
    alert(10)
  },[])

  functions.add(handlerCounterClick)
  functions.add(doSomething)
console.log(functions)
  return (
    <div>
      <span>{counter}</span>
      <button onClick={()=>handlerCounterClick(-1)}>-</button>
      <button onClick={()=>handlerCounterClick(+1)}>+</button>
    </div>
  )
}