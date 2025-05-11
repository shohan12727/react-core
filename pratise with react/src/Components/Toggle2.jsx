import React, { useState } from 'react';

const Toggle2 = () => {

    const [toggle2, setToggle2] = useState(false);
    return (
        <>
            <div style={{ border: '2px solid green', borderRadius: '20px', padding: '10px', margin: '10px' }}>

                <button onClick={() => {
                    setToggle2(!toggle2)
                }}>
                    Shohan
                </button>
                {
                    toggle2 && (
                        <h1>KING👑</h1>
                    )
                }
            </div>
        </>
    );
};

export default Toggle2;