import React, { Fragment } from 'react';

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
        <p>
          We have the best expertise in proffering unique and best values to our
          clients with incredible speed, but yet sustainable.
        </p>

        <section className='row'>
          <section className='testimonial-col' id='testimonial-col'>
            <img src='2phones.png' alt='' />
            <section>
              <h3>Adediji Victor</h3>
              <p>
                I came here with my wife for her make-up and the service here
                was good and i was comfortable i made use of your toilet and it
                was also neat, lastly my wifes make up was so good i will
                definetly love to come here again.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <img src='images/jennifer.jpg' alt='' />
            <section>
              <h3>Jennifer Morgan</h3>
              <p>
                I came here for my make-up and the service here was good and i
                was comfortable i made use of your toilet and it was also neat,
                lastly my make up was so good i will definetly love to come here
                again.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <img src='images/jennifer.jpg' alt='' />
            <section>
              <h3>Jennifer Morgan</h3>
              <p>
                I came here for my make-up and the service here was good and i
                was comfortable i made use of your toilet and it was also neat,
                lastly my make up was so good i will definetly love to come here
                again.
              </p>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
              <i className='fa fa-star' id='fa fa-star'></i>
            </section>
          </section>

          <section className='testimonial-col' id='testimonial-col'>
            <img src='images/jennifer.jpg' alt='' />
            <section>
              <h3>Jennifer Morgan</h3>
              <p>
                I came here for my make-up and the service here was good and i
                was comfortable i made use of your toilet and it was also neat,
                lastly my make up was so good i will definetly love to come here
                again.
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

      {/* Ad */}
      <section className='ad'>
        <img src="ad.png" alt="" />
      </section>

      {/* Footer Leg */}
      <section className='list'>
        <img src="list.png" alt="" />
      </section>
    </Fragment>
  );
};

export default Home;
