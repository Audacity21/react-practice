import React from "react";
import { useState } from "react";
import './Counter.css'

function Counter () {
    const [count, setCount] = useState(0);

    const Add = () => {
        setCount(count+1);
    } 
    
    const Subtract = () => {
        setCount(count-1);
    } 

    return (
        <div className="count-wrap">
            <button className="count-b" onClick={Add}>+</button>
            <h1>{count}</h1>
            <button className="count-b" onClick={Subtract}>-</button>
        </div>
    );
}

export default Counter;
