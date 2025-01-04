import React from 'react'
import { useState } from 'react';
const Main = ({name}) => {
    const [first, setfirst] = useState(0);
    function countPlus(){
        setfirst(first+1);
    }
    function countMinus(){
        if(first >= 0){
        setfirst(first-1);
    }
    }
  return (
    <div className='container'>
        <h1>Counter {name}</h1>
            <div className="content">
            <button className="count" onClick={countPlus}>count</button>
            <div>{first}</div>
            <button className="count" onClick={countMinus} disabled={first===0}>less</button>
        </div>
    </div>
  )
}

export default Main;