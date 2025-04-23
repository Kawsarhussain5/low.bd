import React from 'react';
import Hero from '../components/Hero';
import Lowyers from '../components/Lowyers';
import { useLoaderData } from 'react-router';
import Serves from '../components/Serves';

const Home = () => {
    const data = useLoaderData()
   
    return (
        <div>
            <Hero> </Hero>
            <Lowyers 
            lowyers={data}
            ></Lowyers>
            <Serves></Serves>
        </div>
    );
};

export default Home;