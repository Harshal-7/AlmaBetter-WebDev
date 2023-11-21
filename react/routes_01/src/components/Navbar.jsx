import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = classNames({
    'p-4': true,
    'flex': true,
    'flex-wrap' : true,
    'sm:space-x-24' : true,
    'justify-center': true,
    'space-x-5': true,
    'bg-white': true,
    'top-0': scrolled, // Apply top-0 when scrolled
    'top-8': !scrolled, // Apply top-8 when not scrolled
    'z-10': true,
    'fixed': true,
    'w-full': true,
  });

  const linkClasses = classNames({
    'bg-white': true,
    'text-gray-700': true,
    'cursor-pointer': true,
    'hover:text-black': true,
  });

  return (
    <div className={navbarClasses}>
      <Link to="home" className={linkClasses}>Home</Link>
      <Link to="about" className={linkClasses}>About</Link>
      <Link to="products" className={linkClasses}>Products</Link>
      <Link to="contactus" className={linkClasses}>Contact Us</Link>
    </div>
  );
}

export default Navbar;