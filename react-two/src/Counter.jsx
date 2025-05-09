
import { useState } from "react"

export default function Counter() {


    const [count, SetCount] = useState(0);
    const handleCount = () => {
        const update = count + 5;
        SetCount(update)
    }

    const [click, setClick] = useState(0)
    const handleClick = () => {
        setClick(click + 1);
    }
    const buttonStyle = {
        border: '2px solid green',
        padding: '10px',
        borderRadius: '20px'
    }

    return (
        <>
            <div style={
                {

                    border: '2px solid blue',
                    borderRadius: '20px',
                    padding: '10px'

                }
            }>
                <button style={buttonStyle}
                    onClick={handleClick}>You press me {click} times </button>
                <h2>Count : {count}</h2>
                <button onClick={handleCount}>Add</button>
            </div>
        </>
    )
}
