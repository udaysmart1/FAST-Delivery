import React from 'react';
import Discount from '../../../Discount/Discount';
import Services from '../../Services/Services';
import About from '../Banner/About/About';
import Banner from '../Banner/Banner';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Discount></Discount>
    </div>
  );
};

export default Home;