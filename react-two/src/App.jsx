

import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {


  function handleClick() {
    alert('clicked')
  }

  const handleButton = () => {
    alert('clicked')

  }

  return (
    <>
      <h3>King Shohan </h3>
      <Batsman></Batsman>
      <Counter></Counter><br />


      <button onClick={handleButton}>Open Ui</button><br />
      <button onClick={() => alert('shohan')}>hi</button>
      <button onClick={handleClick}>Click me </button><br />

    </>
  )
}

export default App
