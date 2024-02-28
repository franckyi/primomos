import services from "../data/services";

function Services() {
  return (
    <section className={services.classes}>
      {services.items.length > 0 &&
        services.items.map((service) => (
          <div key={service.id} className={services.itemClasses}>
            <h3 className={services.headingClasses}>
              {service.heading}
              {services.arrow}
            </h3>
            <p className={`m-0 max-w-[30ch] text-sm`}>{service.text}</p>
          </div>
        ))}
    </section>
  );
}

export default Services;
