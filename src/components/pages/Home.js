import React, { Fragment } from 'react';
import OurPeopleHome from '../layout/OurPeopleHome';

const Home = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Bespoke Tech Solutions{' '}
          <span style={{ color: '#f44336' }}>and Consulting</span>
        </h1>
        <p>
          We are one of the best brands that brings your digital dreams to
          exciting realities.
        </p>
        <a href='#!' className='hero-btn' id='hero-btn'>
          Visit Us To Know More
        </a>
      </section>

      {/* Services */}

      <section className='testiomonial'>
        <h1>Services</h1>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>B2Bs & B2Cs</h1>
        <p>
          We have the best expertise in proffering unique and best values to our
          clients with incredible speed, but yet sustainable.
        </p>

        <section className='row'>
          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-laptop' id='set' aria-hidden='true' />
            <section>
              <span>Web Development</span>
              <hr />
              <p>
                We create your uniqueness that markets your brands; hence,
                drives your successes.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-mobile' id='set' aria-hidden='true' />
            <section>
              <span>Mobile App Development</span>
              <hr />
              <p>
                We create impactful mobile applications that are bespoke to your
                brands and industry.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-desktop' id='set' aria-hidden='true' />
            <section>
              <span>UI/UX Design</span>
              <hr />
              <p>
                We research your suitabilities; and proffer clean and
                sustainable product designs.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>
        </section>
      </section>
      <hr />

      <section className='testiomonial'>
        <h1 style={{ color: 'red', fontSize: '1.25rem' }}>B2Bs</h1>
        <section className='row'>
          <section className='testimonial-col' id='testimonial-col'>
            <i
              class='fa fa-assistive-listening-systems'
              id='set'
              aria-hidden='true'
            />
            <section>
              <span>IT Consulting</span>
              <hr />
              <p>
                Our expertise helps your automations and digitalization,
                optimise software, and implement lastest tech.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-cloud' id='set' aria-hidden='true' />
            <section>
              <span>Cloud Computing</span>
              <hr />
              <p>
                We stay at par with world emerging technologies and various tech
                and business intelligences.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <i class='fa fa-globe' id='set' aria-hidden='true' />
            <section>
              <span>General Contracts</span>
              <hr />
              <p>
                We position ourselves to tackle and provide incredible and
                sustainable values and services in all technology spaces.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>
        </section>
      </section>

      {/* Our People, Our Culture */}
      <section>
        <OurPeopleHome />
      </section>
    </Fragment>
  );
};

export default Home;
