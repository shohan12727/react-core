import { useState } from "react"

export default function Array() {

    const [friends, setFriends] = useState(['Rakib', 'Hasan']);

    const handleAddFriends = () => {
        const newFriend = document.getElementById('input-fd').value;
        document.getElementById('input-fd').value = "";
        setFriends(f => [...f, newFriend]);
    }

    const handleRemoveFriends = (index) => {
        setFriends(friends.filter((_, i) => i !== index))

    }
    return (
        <>
            <h2>List of friend's NickName</h2>
            <ul>
                {
                    friends.map((friend, index) => <li
                        onClick={() => handleRemoveFriends(index)}
                    >
                        {friends}
                    </li>)
                }

            </ul>
            <input type="text"
                id="input-fd"
                placeholder="Enter gandu's name"
            />
            <button onClick={handleAddFriends}
            >
                Add
            </button>
        </>
    )
}