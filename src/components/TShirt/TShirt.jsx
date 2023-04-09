import React from 'react';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, price, picture, gender} = tshirt;

    return (
        <div className='border rounded border-teal-500 items-center p-4'>
            
                <img src={picture} alt="product picture" className='object-fit object-center w-52 h-auto' />
                <p>{name}</p>
                <p className='text-2xl font-bold text-blue-800'>Price: ${price}</p>
                <p>Gender: {gender}</p>
                <button onClick={ () => handleAddToCart(tshirt)} className='px-4 py-2 bg-slate-300 hover:bg-slate-500 hover:tex-white cursor-pointer'>Buy Now</button>
              
            
            
        </div>
    );
};

export default TShirt;