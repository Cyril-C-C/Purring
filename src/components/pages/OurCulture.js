import React, { Fragment } from 'react';
import OurPeople from '../layout/OurPeople';

const OurCulture = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Passion, Self - Love, Authenticity, Team - Work{' '}
          <span style={{ color: '#f44336' }}>and Leadership</span>
        </h1>
        <p>
          Our Control Integrity Management System (CIMS) and Operational
          Integrity Management System (OIMS) are all centered on Safety and
          Sustainability.
          <br />
          <br />
          Your Investment of Personality, Intellectual Property and Works will
          always speak volume towards your career success with us; hence,
          everything else counts really less. Just add that value, and come back
          to your family at every COB.
        </p>
        <a
          href='https://www.forbes.com/sites/forbeshumanresourcescouncil/2021/06/01/rewiring-the-workplace-mindset-of-diversity-equity-inclusion-and-belonging/?sh=59aa562021b3'
          target='_blank'
          rel='noreferrer'
          className='hero-btn'
          id='hero-btn'
        >
          For More Information
        </a>
      </section>

      {/* Our People, Our Culture */}
      <section>
        <OurPeople />
      </section>
    </Fragment>
  );
};

export default OurCulture;
