import React from 'react';
import Navbar from '../layout/Navbar';
import HeroPage from '../layout/HeroPage';
import Services from '../layout/Services';
import LaptopVideo from '../layout/LaptopVideo';
import OurPeople from '../layout/OurPeople';

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* HeroPage */}
        <HeroPage />

        {/* Services */}
        <Services />

        {/* Our People, Our Culture */}
        <OurPeople />
        <LaptopVideo />
      </section>
    </>
  );
};

export default Home;
