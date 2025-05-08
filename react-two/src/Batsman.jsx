import { useState } from "react"

export default function Batsman () {

    const [runs,setRuns] = useState(0)
    const handleSingle = () => {
        setRuns(runs + 1);
    }
    const handleDouble = () => {
        setRuns (runs+2);
    }
    const handleFour = () => {
        setRuns(runs+4);

    }
    const handleSix = () => {
        setRuns(runs+6);
    }
    
    
    return (
        <>
        <div style={{
            border:'2px solid brown',
            padding:'10px',
            margin: '20px',
            borderRadius:'10px'
        }}>
            <h3>Batsman Details </h3>
            <p>Total run: {runs} </p>
            <button onClick={handleSingle} >Single run</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
        
        </>
    )
}