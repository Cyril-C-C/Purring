import React from 'react';
import Navbar from '../layout/Navbar';
import OurPeople from '../layout/OurPeople';
import SubCulture from '../layout/SubCulture';

const OurCulture = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* SubCulture */}
        <SubCulture />

        {/* Our People, Our Culture */}
        <OurPeople />
      </section>
    </>
  );
};

export default OurCulture;
