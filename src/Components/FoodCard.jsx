import React from 'react';

const FoodCard = ({food,addToCart}) => {
    return (
        <div className='card h-100 shadow'>
            <img src={food.image} className='card-img-top' alt={food.name} style={{height:"200px",objectFit:"cover"}}/>
            <div className='card-body text-center'>
                <h5>{food.name}</h5>
                <p>{food.price} SEK</p>
                <button className='btn btn-success' onClick={()=> addToCart(food)}>Add to Cart</button>
            </div>
            
        </div>
    );
};

export default FoodCard;