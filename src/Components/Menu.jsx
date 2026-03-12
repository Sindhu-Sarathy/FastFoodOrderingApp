import React from 'react';
import MenuItem from '../Items/MenuItem';
import FoodCard from './FoodCard';

const Menu = ({items,addToOrder}) => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                {items.map(item =>(
                   <div className='col-md-3 md-4' key={item.id}>
                        <FoodCard food={item} addToCart={addToOrder}/>
                   </div> 
                ))}
            </div>
        </div>
    );
};

export default Menu;