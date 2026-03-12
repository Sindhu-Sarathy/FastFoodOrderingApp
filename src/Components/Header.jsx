import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({cart,setShowCart,darkMode,setDarkMode}) => {
    const TotalItems=cart.reduce((sum,item)=> sum + item.qty,0);
    return (
        <nav className='navbar navbar-dark bg-secondary px-4'>
           <h3 className='text-white'>FastFood App</h3> 
           <div className='d-flex align-items-center gap-3'>
            <ThemeToggle darkMode={darkMode} setDarkmode={setDarkMode}/>
            <button className='btn btn-warning position-relative' onClick={() => setShowCart(true)}>
               <FaShoppingCart size={20}/> 
               <span className='badge bg-danger position-absolute top-0 start-100 translate-middle'>
                {TotalItems}
               </span>
            </button>
           </div>

        </nav>
    );
};

export default Header;