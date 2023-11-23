const FAQ = () => {
  return (
    <div className="my-10 max-w-[400px] mx-auto" data-aos="fade-up">
      <h2 className="text-lg lg:text-2xl font-bold text-center mb-4">FAQ</h2>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div className="collapse-title text-xl font-medium">Are you available now?</div>
        <div className="collapse-content">
          <p>Please contact us for schedule and booking details</p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Should I pay in advance?</div>
        <div className="collapse-content">
          <p>Yes, after you place an order we can assure you the best services?</p>
        </div>
      </div>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Do you provide all destination services?</div>
        <div className="collapse-content">
          <p>Please let us know your destination after that we can confirm you.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
