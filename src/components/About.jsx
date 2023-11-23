import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-[400px] mx-auto py-40 text-center">
      <h2 className="text-2xl text-blue-950">About Us</h2>
      <p className="my-2 text-base">We provide possible the best wedding management services. Contact us if you need any!</p>
      <Link to={'/'}>Back to home</Link>
    </div>
  );
};

export default About;
