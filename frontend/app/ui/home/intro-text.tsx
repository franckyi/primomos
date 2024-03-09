const heading = "Twojej destynacji!";

const twoColTextClasses = `lg:p-8 lg:w-3/4 lg:pl-16 first-letter:text-5xl lg:first-letter:text-2xl lg:first-letter:text-7xl first-line:text-orange-400
first-letter:mr-3 first-letter:float-left lg:border-l-2 border-neutral-200 dark:border-neutral-800 lg:hover:bg-neutral-200 dark:lg:hover:bg-black`;
const textLeft = `Gdzie pasja i profesjonalizm spotykają się, by zapewnić Ci niezapomniane doświadczenie fryzjerskie. Nasz salon, położony w sercu Gdańska przy ul. Romana Dmowskiego 6, istnieje na rynku już ponad 6 lat, zdobywając uznanie i lojalność klientów. Nasza misja to nie tylko strzyżenie, ale tworzenie stylu, który podkreśli Twój indywidualizm i charakter. W Primo MOS Barber Shop każda wizyta to więcej niż usługa – to doświadczenie, które zostawia trwałe wrażenie. Nasz zespół profesjonalnych barberów, wykorzystując najnowsze techniki i najlepszej jakości produkty, zapewni Ci wyjątkową opiekę i doradztwo.
              Ponadto, w Primo MOS Barber Shop oferujemy szeroki zakres kursów i szkoleń dla tych, którzy chcą zgłębić tajniki barberingu lub podnieść swoje umiejętności na wyższy poziom. Nasze warsztaty są prowadzone przez doświadczonych specjalistów, którzy dzielą się swoją wiedzą i pasją, aby inspirować kolejne pokolenia barberów.`;

const textRight = `Cenimy sobie relacje z naszymi klientami, dlatego każde spotkanie w naszym salonie to czas spędzony w przyjaznej i relaksującej atmosferze. Nasza wysoka ocena 4.9 na podstawie 104 recenzji jest dowodem na to, że stawiamy na jakość i zadowolenie klienta.
              Zapraszamy do kontaktu i umówienia się na wizytę. Skontaktuj się z nami telefonicznie pod numerem +48 503 489 722 lub mailowo: primomosbarber@gmail.com. Więcej informacji o naszych usługach, kursach i szkoleniach znajdziesz na naszej stronie internetowej primomos.pl oraz na naszym profilu na Facebooku.`;

const textOrangeBox = `Odkryj Primo MOS Barber Shop – miejsce, gdzie każdy mężczyzna może poczuć się wyjątkowo, zadbać o swój wygląd i rozwijać swoje umiejętności w sztuce barberingu. Zapraszamy do doświadczenia różnicy, jaką może zrobić prawdziwy barber shop.`;

export default function IntroText() {
  return (
    <section className="mx-8 lg:mx-24">
      <h2
        id="onas"
        className="p-8 lg:pl-8 mb-8 lg:my-16 w-full lg:w-2/4 text-3xl lg:text-5xl lg:mr-auto bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-orange-400 dark:to-orange-400 dark:text-white text-center"
      >
        {heading}
      </h2>
      <div className="lg:p-4 flex flex-col gap-16 lg:flex-row tracking-wide dark:text-neutral-400">
        <p className={twoColTextClasses}>{textLeft}</p>
        <p className={twoColTextClasses}>{textRight}</p>
      </div>
      <p className="lg:w-2/4 mx-auto my-16 p-8 bg-orange-400 text-black text-2xl font-bold italic">
        {textOrangeBox}
      </p>
    </section>
  );
}
