import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-[300px] lg:min-h-screen bg-cover" style={{ backgroundImage: 'url(https://chandansayed.github.io/course-image-links/w1.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-yellow-400" data-aos="fade-up">
            Welcome!!!
          </h1>
          <p className="mb-5 text-yellow-400" data-aos="fade-up">
            You are at the best place to get a Wedding Management service!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
