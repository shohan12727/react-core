

import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Comments from './Comments'
import Photos from './Photos'
import Posts from './Posts'
import Albums from './Albams'

function App() {

 
 const fetchAlbams = fetch('https://jsonplaceholder.typicode.com/albums')
 .then(res => res.json())


  function handleClick() {
    alert('clicked')
  }

  const handleButton = () => {
    alert('clicked')

  }

  const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())


  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())



  const fetchPhotos = fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())



  const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())

  return (
    <>
      <h3>King Shohan </h3>
    
      <Suspense fallback={<p>Coming.....</p>}>

             <Albums fetchAlbams={fetchAlbams} >

             </Albums>

      </Suspense>

      <Suspense fallback={<p>All posts are coming........</p>}>
        <Posts fetchPosts={fetchPosts}>

        </Posts>
      </Suspense>


      <Suspense fallback={<p>photos............</p>}>
        <Photos fetchPhotos={fetchPhotos} >
        </Photos>
      </Suspense>

      <Suspense fallback={<p>Comment are coming......</p>}>
        <Comments fetchComments={fetchComments}>
        </Comments>
      </Suspense>



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
