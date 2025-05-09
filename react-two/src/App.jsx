

import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'

function App() {


  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())

  function handleClick() {
    alert('clicked')
  }

  const handleButton = () => {
    alert('clicked')

  }









  return (
    <>
      <h3>King Shohan </h3>
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <Users fetchUsers={fetchUsers}>
        </Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter><br />


      <button onClick={handleButton}>Open Ui</button><br />
      <button onClick={() => alert('shohan')}>hi</button>
      <button onClick={handleClick}>Click me </button><br />

    </>
  )
}

export default App
