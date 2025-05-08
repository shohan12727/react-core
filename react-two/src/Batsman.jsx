import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes,setSixes] =useState(0);
     
   
    const handleSingle = () => {
        setRuns(runs + 1);
    }
    const handleDouble = () => {
        setRuns(runs + 2);
    }
    const handleFour = () => {
        setRuns(runs + 4);

    }
    const handleSix = () => {
        setSixes(sixes+1);
        setRuns(runs + 6);
    }
    return (
        <>
            <div style={{
                border: '2px solid brown',
                padding: '10px',
                margin: '20px',
                borderRadius: '10px',
                background:'#e1f5fe'
            }}>
                <h3>Batsman Details </h3>
                <p><small>Six: {sixes} </small></p>
                {
                    runs > 50 && <p>Congrarulations! you scored Fifty</p>
                }
                {
                    runs > 100 && <p>Congratulations! You scored Hundred.☺</p>
                }
                {/* we use this when it is true  */}
                <p style={{ color: 'green', fontWeight: '20px' }}>Total run: {runs} </p>
                <button style={{ padding: '10px' }}
                    onClick={handleSingle} >Single run</button>
                <button style={{ padding: '10px', margin: '10px' }}
                    onClick={handleDouble}>Double</button>
                <button style={{ padding: '10px', margin: '10px' }}
                    onClick={handleFour}>Four</button>
                <button style={{ padding: '10px' }}
                    onClick={handleSix}>Six</button>
            </div>

        </>
    )
}