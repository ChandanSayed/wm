import React, { useContext } from 'react';
import { Context } from '../context/AppContext';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Banner from './Banner';
import FAQ from './FAQ';
import Carousel from './Carousel';

const Home = () => {
  const { user } = useContext(Context);
  console.log(user);
  const services = useLoaderData();
  console.log(services);

  return (
    <>
      <Banner />
      <div className="card-container max-w-[1350px] mx-auto px-[15px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-24 pb-32">
        {services.map(service => (
          <Card service={service} key={service.id} />
        ))}
      </div>
      <FAQ />
      <Carousel />
    </>
  );
};

export default Home;
