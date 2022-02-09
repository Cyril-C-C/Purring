import React from 'react';
import NavBarSub from '../layout/NavBarSub';
import OurPeople from '../layout/OurPeople';
import SubCulture from '../layout/SubCulture';

const OurCulture = () => {
  return (
    <>
      <NavBarSub />
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
