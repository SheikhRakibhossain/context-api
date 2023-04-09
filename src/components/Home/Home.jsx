import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt=> {
        const exist = cart.find(ts =>ts._id === tshirt._id );
        if(exist){
            toast("You have added this before!")
        }else{
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
       
     }
     const handleRemoveProduct = id =>{
            const remaining = cart.filter(ts => ts._id !==id);
            setCart(remaining)
     }
    // console.log(tshirts);
    return (
        <section className='flex relative' >

            {/* single product as a cart view by map looping*/}
            <div className='grow grid xl:grid-cols-3 md:grid-cols-2 gap-4 p-4 justify-center items-center'>                {
                    tshirts.map(tshirt => <TShirt
                        id={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            {/* cart component */}
            <div className='sticky top-0'>
                <Cart
                cart={cart}
                handleRemoveProduct={handleRemoveProduct}
                ></Cart>
            </div>
        </section>
    );
};

export default Home;