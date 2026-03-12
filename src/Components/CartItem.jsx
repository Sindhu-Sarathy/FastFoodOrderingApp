import React from 'react';

const CartItem = ({item,increaseQty,decreaseQty}) => {
    return (
        <div className='d-flex justify-content-between align-items-center border-bottom p-2'>
           <h6>{item.name}</h6>
           <div>
            <button className='btn btn-danger btn-sm' onClick={() => decreaseQty(item.id)}>-</button>
            <span className='mx-2'>{item.qty}</span>
            <button className='btn btn-success btn-sm' onClick={() => increaseQty(item.id)}>+</button>
            </div> 
            <p>{item.price * item.qty}SEK</p>
        </div>
    );
};

export default CartItem;