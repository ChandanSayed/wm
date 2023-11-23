import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  let userId = useParams();
  const donations = useLoaderData();
  const exactList = donations.find(list => list.id === userId.id * 1);
  return (
    <>
      <div className="max-w-[900px] mx-auto pt-24 px-[15px] pb-32 lg:flex gap-5">
        <div className="img-container relative lg:w-1/3" data-aos="fade-up">
          <img src={exactList.image} alt={exactList.title} className="w-full rounded-lg h-[250px] object-cover" />
          <div className="overlay bg-[#0B0B0B] bg-opacity-20 absolute bottom-0 left-0 right-0 top-0 rounded-lg p-[37px]"></div>
        </div>
        <div className="w-2/3" data-aos="fade-up">
          <h2 className="mb-6 text-4xl text-[#0b0b0b] font-bold">{exactList.title}</h2>
          <p className="text-base text-[#0b0b0b] text-opacity-70">{exactList.description}</p>
          <button className={`inline-flex text-lg rounded-[4px] py-2 w-fit text-black`}>Price ${exactList.cost}</button>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
