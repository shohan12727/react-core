import { useState } from "react"
import '../App.css'
export default function Toggle3 () {
    

    const [toggle3, setToggle3] = useState(false);
    const buttonStyle = {
    border: '2px solid red'
        }
    

    return(
        <>
        <div style={buttonStyle} className="card">
            <button onClick={
                () => setToggle3(!toggle3)
            }
            >EX</button>
            {
                toggle3 && (
                    <h1>Next</h1>
                )
            }
        </div>
        </>
    )
}