import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
       
        <p className="mb-0">
          &copy; {new Date().getFullYear()} G-shop  All rights reserved.
        </p>
        <div>
          <Link to="/about" className="text-decoration-none text-light mx-2">
            About
          </Link> 
          <Link to="/contact" className="text-decoration-none text-light mx-2">
            Contact
          </Link> 
            <Link to="/policy" className="text-decoration-none text-light mx-2">
            Privacy-Policy
          </Link>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
 