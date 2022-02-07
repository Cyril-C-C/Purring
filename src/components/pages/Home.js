import React, { Fragment } from 'react';
import HeroPage from '../layout/HeroPage';
import Services from '../layout/Services';
import OurPeople from '../layout/OurPeople';

const Home = () => {
  return (
    <>
      {/* HeroPage */}
      <HeroPage />

      {/* Services */}
      <Services />

      {/* Our People, Our Culture */}
      <OurPeople />
    </>
  );
};

export default Home;
