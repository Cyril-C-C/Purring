import React from 'react';

const Navbar = () => {

  return (
    <header
      className='header'
      id='header'
      style={{ backgroundImage: `url(Bg.png)` }}
    >
      <nav>
            <a href="index.html"><p>Purring</p></a>
            <section className="nav-links" id="navLinks">
                <i className="fa fa-times" id="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="course.html">COURSE</a></li>
                    <li><a href="blog.html">BLOG</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </section>
            <i class="fa fa-bars" id="fa fa-bars" onclick="showMenu()"></i>
        </nav>
    </header>
  );
};

export default Navbar;
