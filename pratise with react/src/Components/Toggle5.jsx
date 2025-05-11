import React, { useState } from 'react';

const Toggle5 = () => {

    const toggle5Style = {
        border: '2px solid blue',
        borderRadius: '20px',
        margin: '10px',
        padding: '10px'
    }
    const [toggle5, setToggle5] = useState(false);
    const handleToggle5 = () => {
        setToggle5(!toggle5);
    }
    return (
        <div style={toggle5Style}>
            <button onClick={handleToggle5}>USA</button>
            {
                toggle5 && (
                    <h1>Uk</h1>
                )
            }
        </div>
    );
};

export default Toggle5;