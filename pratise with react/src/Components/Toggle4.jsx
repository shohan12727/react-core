import React, { useState } from 'react';
import '../App.css'

const Toggle4 = () => {

    const [toggle4, setToggle4] = useState(false)

    return (
        <>
            <div className='card'>
                <button onClick={
                    () => {
                        setToggle4(!toggle4)
                    }
                }
                >
                    Ami
                </button>
                {
                    toggle4 && (
                        <h1>Tomi</h1>
                    )
                }

            </div>
        </>
    );
};

export default Toggle4;