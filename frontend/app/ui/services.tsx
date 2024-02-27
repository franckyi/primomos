function Services() {
  return (
    <section className="m-8 lg:mx-24 my-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left border border-1 border-orange-400 dark:border-orange-400">
      <div className="group rounded-lg border border-transparent p-8 m-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-orange-400 hover:dark:bg-neutral-800/30">
        <h3 className="mb-3 text-2xl font-semibold">
          Wiedza{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h3>
        <p className={`m-0 max-w-[30ch] text-sm`}>
          Mamy ponad 10 lat doświadczenia w stylizacji.
        </p>
      </div>

      <div className="group rounded-lg border border-transparent p-8 m-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-orange-400 hover:dark:bg-neutral-800/30">
        <h3 className="mb-3 text-2xl font-semibold">
          Pasja{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h3>
        <p className={`m-0 max-w-[30ch] text-sm`}>
          Pasja i profesjonalizm umożliwiają nam kreowanie nowych stylizacji.
        </p>
      </div>

      <div className="group rounded-lg border border-transparent p-8 m-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-orange-400 hover:dark:bg-neutral-800/30">
        <h3 className="mb-3 text-2xl font-semibold">
          Zespół{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h3>
        <p className={`m-0 max-w-[30ch] text-sm`}>
          Tworzymy zespół zgranych i kreatywnych specjalistów.
        </p>
      </div>

      <div className="group rounded-lg border border-transparent p-8 m-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-orange-400 hover:dark:bg-neutral-800/30">
        <h3 className="mb-3 text-2xl font-semibold">
          Szkolenie{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h3>
        <p className={`m-0 max-w-[30ch] text-sm`}>
          Prowadzimy szkolenie w zakresie stylizacji mężczyzn.
        </p>
      </div>
    </section>
  );
}

export default Services;
