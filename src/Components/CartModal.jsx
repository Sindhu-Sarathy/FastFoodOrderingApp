import React from 'react';
import CartItem from './CartItem';

const CartModal = ({cart,increaseQty,decreaseQty,setShowCart}) => {

    const total=cart.reduce((sum,item)=> sum + item.price * item.qty,0);

    return (
        <div className='modal fade show d-block'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5>Your Cart</h5>
                        <button className='btn-close' onClick={()=> setShowCart(false)}></button>
                    </div>
                    <div className='modal-body'>
                        {cart.length === 0 ? (<p>Cart is Empty</p>) : (
                            cart.map(item => 
                                <CartItem key={item.id} item={item} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                            )
                        )}
                    </div>
                    <div className='modal-footer'>
                        <h5>Total: {total}SEK </h5>
                        <button className='btn btn-success'>Checkout</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CartModal;