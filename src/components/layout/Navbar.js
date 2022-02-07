import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  // var navLinks = document.getElementById('navLinks');
  // const navLinks = useRef(null);

  // const showMenu = () => (navLinks.style.right = '0');

  // const hideMenu = () => (navLinks.style.right = '-12.5rem');

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <section className='header' id='header'>
      <nav>
        <Link to='/' className='navbar-logo'>
          Purring
        </Link>
        <section className='nav-links' id='navLinks'>
          {/* <i class='fa fa-times' id='fa fa-times' onclick={hideMenu}></i> */}
          <ul>
            <li>
              <Link to='/Culture.html'>OUR CULTURE</Link>
            </li>
            <li>
              <Link to='#!'>ABOUT</Link>
            </li>
            <li>
              <Link to='#!'>WORKS</Link>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='#!'>
                TEAM{' '}
                <i
                  className='fas fa-caret-down'
                  style={{ padding: '0.5rem' }}
                />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link to='#!'>CAREERS</Link>
            </li>
            <li>
              <Link to='#!'>CONTACT</Link>
            </li>
          </ul>
        </section>
        {/* <i class='fa fa-bars' id='fa fa-bars' onclick={showMenu}></i> */}
      </nav>
    </section>
  );
};

export default Navbar;
