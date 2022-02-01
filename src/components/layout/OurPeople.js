import React, { Fragment } from 'react';

const OurPeople = () => {
  return (
    <Fragment>
      {/* Our People, Our Culture */}
      <section className='about-us'>
        <section className='row' id='row'>
          <section className='about-col' id='about-coll'>
            <h1>Our People, Our Culture</h1>
            <p>
              Diversity - Inclusion - Belonging (DIB) affects all - round the
              way we relate to our clients and employees. We have enshrined the
              culture of authenticity and self - love in all our spaces.
              <br />
              <br />
              Just show up the way you are, we would work with you. Our leverage
              for our people's passion, commitment, self - discipline, service
              and above all leadership has positioned us to the limelight in
              technology and business spaces.
            </p>
            <a href='#!' className='hero-btn red-btn' id='hero-btn red-btn'>
              EXPLORE NOW
            </a>
          </section>
          <section className='about-col' id='about-col'>
            <img src='People.jpeg' alt='' />
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default OurPeople;
