import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="card-container max-w-[1350px] mx-auto px-[15px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-24 pb-32">
      {services.map(service => (
        <Card service={service} key={service.id} />
      ))}
    </div>
  );
};

export default Services;
