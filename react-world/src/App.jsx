import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {


  const CountriesPromise = fetch ('https://restcountries.com/v3.1/all')
  .then(res => res.json())



  return (
    <>
      <h1>King Shohan</h1>
     <Suspense fallback={<h3>⌛Downloading message...</h3>}>
       <Countries CountriesPromise={CountriesPromise}></Countries>
     </Suspense>
    </>
  )
}

export default App
