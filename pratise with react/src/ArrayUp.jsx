import React, { useState } from 'react';

const ArrayUp = () => {
    const [bottles, setBottles] = useState(['Coca Cola', 'Pran']);

    const handleAdd = () => {
        const newBottle = document.getElementById("add").value.trim();
        if (!newBottle) return;
        document.getElementById("add").value = "";
        setBottles(b => [...b, newBottle]);
    }

    const handleRemove = (index) => {
        setBottles(bottles.filter((_, i) => i !== index));
    }

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '40px auto',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                fontFamily: 'sans-serif'
            }}
        >
            <h2
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    textAlign: 'center',
                    color: '#4f46e5' // indigo-600
                }}
            >
                Bottle List
            </h2>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                {bottles.map((bottle, index) => (
                    <li
                        key={index}
                        onClick={() => handleRemove(index)}
                        style={{
                            backgroundColor: '#e0e7ff', // indigo-100
                            padding: '10px 16px',
                            borderRadius: '8px',
                            marginBottom: '8px',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                        }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#fee2e2'} // red-100
                        onMouseOut={e => e.currentTarget.style.backgroundColor = '#e0e7ff'}
                        title="Click to remove"
                    >
                        {bottle}
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', gap: '8px' }}>
                <input
                    type="text"
                    id="add"
                    placeholder="Add a new bottle"
                    style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        fontSize: '14px'
                    }}
                />
                <button
                    onClick={handleAdd}
                    style={{
                        backgroundColor: '#6366f1', // indigo-500
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#4f46e5'} // darker
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#6366f1'}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default ArrayUp;
