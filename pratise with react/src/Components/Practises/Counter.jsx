import React, { useState } from 'react';



const Counter = () => {

    const [counter,setCounter] = useState(0)

    const handleIncrement = () =>{
        setCounter(counter+5);
    }
    const handleDecrement = () => {
        setCounter(counter-5);
    }
    return (
        <div>
            <button style={{margin:'10px'}} onClick={handleDecrement}>-</button>
            
              {
                counter 
              }
            <button style={{margin:'10px'}} onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;