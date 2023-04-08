import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <section>
           <h2>This is home page {tshirts.length}</h2>
        </section>
    );
};

export default Home;