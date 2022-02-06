import React, { Fragment } from 'react';
import HeroPage from '../layout/HeroPage';
import Services from '../layout/Services';
import OurPeople from '../layout/OurPeople';
import Footer1 from '../layout/Footer1';

const Home = () => {
  return (
    <>
      {/* HeroPage */}
      <HeroPage />

      {/* Services */}
      <Services />

      {/* Our People, Our Culture */}
      <OurPeople />

      {/* Footer */}
      <Footer1 />
    </>
  );
};

export default Home;
