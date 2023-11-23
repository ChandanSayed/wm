import { Link } from 'react-router-dom';

const Card = ({ service }) => {
  const { title, image, cost, id } = service;

  return (
    <div className={`card rounded-lg bg-white shadow-sm`}>
      <figure>
        <img src={image} alt={title} className="w-full h-[220px] object-cover" />
      </figure>
      <div className={`card-body p-4`}>
        <p className="badge badge-secondary border-transparent p-1 text-lg lg:text-xl font-bold h-auto">${cost.toFixed(2)}</p>
        <h2 className="card-title font-semibold text-xl">{title}</h2>
        <Link to={`/service/${id}`} className={`inline-flex text-lg rounded-[4px] py-2 w-fit`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;