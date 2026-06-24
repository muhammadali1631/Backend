import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState({name: "", age: null, city: ""})
  async function getRes() {
    console.log(userData)
    // const data = await axios.get("http://localhost:8000/")
    const data = await axios.post("http://localhost:8000/", userData)

    console.log(data.data)
    
  }

  return (
    <>
      <section id="center">
        
        <input type="text" placeholder='name' onChange={(e)=> setUserData({...userData, name: e.target.value})}/>
        <input type="text" placeholder='age' onChange={(e)=> setUserData({...userData, age: e.target.value})}/>
        <input type="text" placeholder='city' onChange={(e)=> setUserData({...userData, city: e.target.value})}/>
        
        <button
          type="button"
          className="counter"
          onClick={()=> getRes()}
        >
          Submit
        </button>
      </section>

      
    </>
  )
}

export default App
