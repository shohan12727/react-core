import { useState } from "react"

export default function Array() {

    const [foods, setFoods] = useState(['Apple', 'Orrange'])

    const handleAddFood = () => {
        const newFood = document.getElementById('input-food').value;
        document.getElementById('input-food').value = "";
        setFoods(f => [...f, newFood]);
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))

    }
    return (
        <>
            <div>
                <h2>List of Foods</h2>
                 <ul>
                {foods.map((food, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                        {food}
                        <button 
                            onClick={() => handleRemoveFood(index)} 
                            style={{ marginLeft: "10px", color: "white", backgroundColor: "red", border: "none", padding: "4px 8px", cursor: "pointer" }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
                <input type="text"
                    id="input-food"
                    
                    placeholder="Enter your food name" />
                <button
                    style={{
                        padding: '10px',
                        margin: '10px'
                    }}
                    onClick={handleAddFood}
                >Add food</button>
            </div>
        </>
    )
}