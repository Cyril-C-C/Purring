import React, { Fragment } from 'react';

const OurPeopleHome = () => {
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
              for our people's passion, team - spirit, commitment, self -
              discipline, service and above all leadership has positioned us to
              the limelight in technology and business spaces.
            </p>
            <a
              href='https://www.forbes.com/sites/forbeshumanresourcescouncil/2021/06/01/rewiring-the-workplace-mindset-of-diversity-equity-inclusion-and-belonging/?sh=59aa562021b3'
              target='_blank'
              rel='noreferrer'
              className='hero-btn red-btn'
              id='hero-btn red-btn'
            >
              EXPLORE NOW
            </a>
          </section>
          <section className='about-col' id='about-col'>
            <img src='People.jpeg' alt='' />
          </section>
        </section>
      </section>

      {/* Footer Home */}
      <section className='about-us-list-home' id='about-us-list-home'>
        <section className='row-list' id='row-list'>
          <section className='about-col-list'>
            <h1>Hire Us</h1>
            <p>Ready to start planning your next project(s)?</p>
            <a href='#!' className='hero-btn-list' id='hero-btn-list'>
              LET'S TALK{' '}
              <i class='fa fa-arrow-right' aria-hidden='true' />
            </a>
          </section>
          <section className='about-col-list'>
            <h1>Join Us</h1>
            <p>We are hiring</p>
            <a href='#!' className='hero-btn-list' id='hero-btn-list'>
              Apply{' '}
              <i class='fa fa-arrow-right' aria-hidden='true' />
            </a>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default OurPeopleHome;
