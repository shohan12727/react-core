import React, { useState } from 'react';

const Toggle = () => {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div style={{
                padding: '20px',
                border: '2px solid red',
                borderRadius: '20px'
            }}>
                <button
                    onClick={handleToggle}
                >
                    Pal</button>
                {
                    toggle && (
                        <h1>Nondini</h1>
                    )
                }
            </div>
        </>
    );
};

export default Toggle;