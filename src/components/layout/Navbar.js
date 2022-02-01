import React from 'react';

const Navbar = () => {
  return (
    <section
      className='header'
      id='header'
      style={{
        backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(Bg.jpg)`,
      }}
    >
      <nav className='nav'>
        <a
          href='/'
          style={{
            width: '3.125rem',
            color: '#f44336',
            fontSize: '1.25rem',
            fontWeight: 'bolder',
          }}
        >
          Purring
        </a>
        <section className='nav-links' id='navLinks'>
          <i className='fa fa-times' id='fa fa-times' onclick='hideMenu()'></i>
          <ul>
            <li>
              <a href='/OurCulture'>OUR CULTURE</a>
            </li>
            <li>
              <a href='#!'>ABOUT</a>
            </li>
            <li>
              <a href='#!'>WORK</a>
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
        <i class='fa fa-bars' id='fa fa-bars' onclick='showMenu()'></i>
      </nav>
    </section>
  );
};

export default Navbar;
