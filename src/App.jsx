import { useState } from 'react'
import './App.css'
import Header from './Components/Header'

function App() {
    const[cart,setCart] = useState([]);
    const[showCart,setShowCart]=useState(false);
    const[darkMode,setDarkMode]=useState(false);

  return (
    <>
     <Header cart={cart} setShowCart={setShowCart} darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default App
