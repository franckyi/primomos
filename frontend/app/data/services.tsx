const services = {
  classes:
    "m-8 lg:mx-24 my-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left border border-1 border-orange-400 dark:border-orange-400 text-neutral-800 dark:text-neutral-400",
  itemClasses:
    "group rounded-lg border border-transparent p-8 m-4 transition-colors hover:border-orange-400 hover:bg-gray-100 hover:dark:border-orange-400 hover:dark:bg-neutral-800/30",
  headingClasses: "mb-3 text-2xl font-semibold",
  items: [
    {
      id: 0,
      heading: "Wiedza",
      text: "Mamy ponad 10 lat doświadczenia w stylizacji.",
    },
    {
      id: 1,
      heading: "Pasja",
      text: "Pasja i profesjonalizm umożliwiają nam kreowanie nowych stylizacji.",
    },
    {
      id: 2,
      heading: "Zespół",
      text: "Tworzymy zespół zgranych i kreatywnych specjalistów.",
    },
    {
      id: 3,
      heading: "Szkolenie",
      text: "Prowadzimy szkolenie w zakresie stylizacji mężczyzn.",
    },
  ],
  arrow: (
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  ),
};

export default services;
