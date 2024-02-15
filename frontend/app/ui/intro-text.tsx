const text1 = `Gdzie pasja i profesjonalizm spotykają się, by zapewnić Ci niezapomniane doświadczenie fryzjerskie. Nasz salon, położony w sercu Gdańska przy ul. Romana Dmowskiego 6, istnieje na rynku już ponad 6 lat, zdobywając uznanie i lojalność klientów. Nasza misja to nie tylko strzyżenie, ale tworzenie stylu, który podkreśli Twój indywidualizm i charakter. W Primo MOS Barber Shop każda wizyta to więcej niż usługa – to doświadczenie, które zostawia trwałe wrażenie. Nasz zespół profesjonalnych barberów, wykorzystując najnowsze techniki i najlepszej jakości produkty, zapewni Ci wyjątkową opiekę i doradztwo.
              Ponadto, w Primo MOS Barber Shop oferujemy szeroki zakres kursów i szkoleń dla tych, którzy chcą zgłębić tajniki barberingu lub podnieść swoje umiejętności na wyższy poziom. Nasze warsztaty są prowadzone przez doświadczonych specjalistów, którzy dzielą się swoją wiedzą i pasją, aby inspirować kolejne pokolenia barberów.`;

const text2 = `Cenimy sobie relacje z naszymi klientami, dlatego każde spotkanie w naszym salonie to czas spędzony w przyjaznej i relaksującej atmosferze. Nasza wysoka ocena 4.9 na podstawie 104 recenzji jest dowodem na to, że stawiamy na jakość i zadowolenie klienta.
              Zapraszamy do kontaktu i umówienia się na wizytę. Skontaktuj się z nami telefonicznie pod numerem +48 503 489 722 lub mailowo: primomosbarber@gmail.com. Więcej informacji o naszych usługach, kursach i szkoleniach znajdziesz na naszej stronie internetowej primomos.pl oraz na naszym profilu na Facebooku.`;

const text3 = `Odkryj Primo MOS Barber Shop – miejsce, gdzie każdy mężczyzna może poczuć się wyjątkowo, zadbać o swój wygląd i rozwijać swoje umiejętności w sztuce barberingu. Zapraszamy do doświadczenia różnicy, jaką może zrobić prawdziwy barber shop.`;

export default function IntroText() {
  return (
    <>
      <div className="p-8 pl-8 lg:my-16 text-3xl lg:text-5xl mr-auto bg-gradient-to-r from-black to-orange-400">
        Twojej destynacji!
      </div>
      <section className="flex flex-col gap-16 lg:flex-row p-4 tracking-wide text-neutral-400">
        <p
          className="lg:w-3/4 lg:pl-16 lg:text-xl first-letter:text-2xl lg:first-letter:text-7xl first-line:text-orange-400
        first-letter:mr-3 first-letter:float-left lg:border-l-2 border-neutral-800"
        >
          {text1}
        </p>
        <p
          className="lg:w-3/4 lg:pl-16 lg:text-xl first-letter:text-2xl lg:first-letter:text-7xl first-line:text-orange-400
        first-letter:mr-3 first-letter:float-left lg:border-l-2 border-neutral-800"
        >
          {text2}
        </p>
      </section>
      <p className="my-16 p-8 bg-orange-400 text-black text-2xl">{text3}</p>
    </>
  );
}
