import React from 'react';

const Footer2 = () => {
  return (
    <section class='footer' id='footer'>
      <section className='links'>
        <section className='footer-links' id='footerLinks'>
          <ul>
            <li>
              <a href='/'>HOME</a>
            </li>
            <li>
              <a href='/Culture/'>OUR CULTURE</a>
            </li>
            <li>
              <a href='#!'>ABOUT</a>
            </li>
            <li>
              <a href='#!'>WORKS</a>
            </li>
            <li>
              <a href='#!'>TEAM</a>
            </li>
            <li>
              <a href='#!'>CAREERS</a>
            </li>
            <li>
              <a href='#!'>CONTACT</a>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <p>FOLLOW US ON:</p>
        <section className='icons'>
          <a
            href='https://www.linkedin.com/company/purring'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-linkedin' id='fa fa-linkedin' />
          </a>
          <a
            href='https://twitter.com/_Purring_?t=3tbsLvQKm_qYSVL9DBlcbg&s=08'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-twitter' id='fa fa-twitter' />
          </a>
        </section>
      </section>
      <hr />
      <span>
        Copyright <i class='fa fa-copyright' id='fa fa-copyright' /> Purring
        2022
      </span>
      <span>Privacy Policy</span>
    </section>
  );
};

export default Footer2;
