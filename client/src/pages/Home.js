import React from 'react';
import Hero from '../components/Hero';
import QuemSomos from '../components/QuemSomos';
import ProximoEncontro from '../components/ProximoEncontro';
import Acervos from '../components/Acervos';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <QuemSomos />
      <ProximoEncontro />
      <Acervos />
    </div>
  );
};

export default Home;
