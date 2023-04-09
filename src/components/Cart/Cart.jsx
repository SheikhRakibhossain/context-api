import React from 'react';

const Cart = ({cart, handleRemoveProduct}) => {
    return (
        <div className=' py-10 px-10'>
            <h2 className='text-4xl text-center font-bold py-6'>Order Summary</h2>
            {
                cart.map( tshirt => <p
                key={tshirt._id}
                
                className='text-center text-blue-700, font-bold py-3'>{tshirt.name} 
                <button onClick={()=>handleRemoveProduct(tshirt._id)} className=' px-6 py-3 ml-4' >X</button> </p> )
            }
        </div>
    );
};

export default Cart;