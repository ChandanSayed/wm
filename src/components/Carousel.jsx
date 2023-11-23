import React from 'react';

const Carousel = () => {
  return (
    <div className="max-w-[500px] mx-auto">
      <h2 className="text-2xl text-blue-950 mb-5 font-bold text-center">Photo Album</h2>
      <div className="carousel w-full max-w-[1300px] mx-auto mb-10">
        <div id="slide1" className="carousel-item relative w-full h-[250px] object-cover">
          <img src="https://chandansayed.github.io/course-image-links/w1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[250px] object-cover">
          <img src="https://chandansayed.github.io/course-image-links/w2.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[250px] object-cover">
          <img src="https://chandansayed.github.io/course-image-links/w3.webp" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[250px] object-cover">
          <img src="https://chandansayed.github.io/course-image-links/w4.webp" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
