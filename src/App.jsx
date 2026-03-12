import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Menu from './Components/Menu';
import MenuItem from './Items/MenuItem';
import CartModal from './Components/CartModal';

function App() {
    const[cart,setCart] = useState([]);
    const[showCart,setShowCart]=useState(false);
    const[darkMode,setDarkMode]=useState(false);

    const addToOrder=(food) =>{
        const exist=cart.find(item => item.id == food.id);
        if(exist){
          setCart(cart.map(item=> item.id==food.id ? {...item, qty : item.qty + 1 } : item));
        }
        else{
          setCart([...cart,{ ...food, qty: 1}]);
        }

    };

    const increaseQty = (id) => {
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1}:item));
    }

    const decreaseQty = (id)=> {
      setCart(cart.map(item => item.id === id? {...item, qty: item.qty - 1}:item).filter(item => item.qty > 0));
    }

  return (
    <div className={darkMode ? "bg-dark text-light min-vh-100" : ""}>
     <Header cart={cart} setShowCart={setShowCart} darkMode={darkMode} setDarkMode={setDarkMode}/>
     <Menu items={MenuItem} addToOrder={addToOrder}/>
     {showCart && (<CartModal cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} setShowCart={setShowCart}/>)}
    </div>
  )
}

export default App
