import Image from "next/image";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const heading = "Szkolenie";
function getIntro() {
  return (
    <p className="w-3/4 text-neutral-800 dark:text-neutral-500">
      Jestem dyplomowanym Barberem i{" "}
      <em className="text-orange-400 font-bold">
        chcę się podzielić moją wiedzą i dużym doświadczeniem
      </em>{" "}
      jakie zdobyłem na przestrzeni ostatnich kilkudziesięciu lat, moja ojczysta
      Jordania, Norwegia, Singapur, a także moje liczne podróże po świecie
      pokazały jak wiele jest możliwości jeśli chodzi o zawód barbera.
    </p>
  );
}

function Training() {
  return (
    <section className="mx-8 lg:mx-24">
      <h2
        id="szkolenie"
        className="p-8 pl-8 mt-16 mb-0 lg:w-1/3 text-3xl lg:text-5xl mr-auto bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-orange-400 dark:to-orange-400 dark:text-white text-center"
      >
        {heading}
      </h2>
      <div className="my-24 flex flex-col lg:flex-row gap-16">
        <p className="text-2xl italic text-orange-400 font-bold">
          <span>
            <FormatQuoteIcon className="block text-8xl" />
          </span>
          Posiadam uprawnienia z zakresu metodyki szkolenia osób dorosłych i
          organizacji szkoleń, a także uprawnienia dla Instruktorów praktycznej
          nauki zawodu.
        </p>
        {getIntro()}
        <Image
          src={"/interior.webp"}
          height={320}
          width={480}
          alt="Primo MOS logo"
          priority
          draggable="false"
          className=""
        />
      </div>

      <div className="my-24 flex flex-col lg:flex-row bg-orange-400">
        <Image
          src={"/img (9).webp"}
          height={366}
          width={480}
          alt="Szkolenie"
          priority
          draggable="false"
          className="inline"
        />
        <div>
          <span className="block mt-8 pt-0 p-8 text-2xl text-black font-bold uppercase">
            Jak zdobyć wyższy stopień barberingu… <br />
            Zapraszam pomogę Ci
          </span>
          <div className="bg-neutral-900 text-neutral-200 p-8">
            <p className="p-4 border border-orange-400 border-solid border-2 rounded text-orange-400 text-center">
              Jako instytucja szkoleniowa jesteśmy wpisani do RIS pod numerem
              22.22/00212/2022
            </p>
            <br />
            Gdyż dla mnie{" "}
            <strong className="font-bold text-orange-400 italic">
              BARBERING to nie tylko strzyżenie, to jest cała filozofia
            </strong>
            , cała otoczka, rodzaj rytuału – taki męski świat gdzie w salonie
            główną rolę gra BARBER.
            <br />
            Nauczę Cię co można zrobić z włosami, odpowiednio dobrane cięcie
            musi pasować do klienta – do jego stylu, kształtu twarzy. Dlatego,
            aby osiągnąć zamierzony efekt trzeba otworzyć się na potrzeby i
            oczekiwania klienta.{" "}
            <strong className="font-bold text-orange-400 italic">
              Strzyżenie męskie musi być wykonane z wykorzystaniem odpowiednich
              technik i precyzji przez doświadczonego Barbera
            </strong>
            . Liczy się każdy najmniejszy ruch maszynką lub nożyczkami, a do
            tego właściwa pielęgnacja włosów jest bardzo istotna dla zachowania
            pięknego wyglądu i kondycji włosów.
          </div>
          <br />
          <div className="p-8 bg-orange-400 text-black font-bold">
            Pomogę Ci co zrobić z brodą i jak doporowadzić ją do porządku. Jest
            oczywiście szereg precyzyjnych zabiegów, to przede wszystkim
            trymowanie brody, czyli nadanie kształtu, skrócenie, odpowiednie
            wyprofilowanie do owalu twarzy, dostosowanie do typu osobowości i
            męskiej urody. Poprzez trymowanie i nadanie konturów brody możemy
            coś wyeksponować lub coś ukryć, na przykład za bardzo wyeksponowaną
            szczękę lub za mało wysunięty podbródek. To wszystko możemy
            wyprofilować zarostem. A takim podpisem barbera jest wyznaczenie
            konturów brody brzytwą, a więc wyznaczamy miejsce, gdzie ta broda
            powinna się zaczynać i powinna się kończyć.
          </div>
        </div>
      </div>
      <p className="text-neutral-950 dark:text-neutral-500">
        Słuchamy Twoich potrzeb – to pierwszy i najważniejszy krok do idealnej
        fryzury, aby wybrać najlepszą technikę strzyżenia oraz sprostać
        wszystkim Twoim oczekiwaniom. Rekomendujemy dla Ciebie – co możemy
        zmienić aby osiągnąć najlepszy rezultat? Podpowiemy jaka fryzura będzie
        dla Ciebie najlepsza. Specjalnie dobrana i spersonalizowana stylizacja,
        która spełni wszystkie Twoje oczekiwania. Dobieramy strzyżenie – każdy
        ruch nożyczkami i maszynką jest niezwykle istotny. Precyzyjne i dokładne
        strzyżenie to podstawa. Stylizujemy fryzurę – Efekt końcowy zawdzięczamy
        modelowaniu i odpowiedniej stylizacji. Chcesz aby fryzura układała się
        sama? Dobierzemy do tego odpowiednie strzyżenie. Jeśli stylizujesz
        włosy, podpowiemy jak to zrobić i jakich produktów użyć, aby osiągnąć
        taki efekt, jaki chcesz.
      </p>
    </section>
  );
}

export default Training;
