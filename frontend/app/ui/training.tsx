import Image from "next/image";

function Training() {
  return (
    <>
      <div className="p-8 pl-8 lg:my-16 text-3xl lg:text-5xl mr-auto bg-gradient-to-r from-black to-orange-400">
        Szkolenie
      </div>
      <p>
        Jestem dyplomowanym Barberem i chcę się podzielić moją wiedzą i dużym
        doświadczeniem jakie zdobyłem na przestrzeni ostatnich kilkudziesięciu
        lat, moja ojczysta Jordania, Norwegia, Singapur, a także moje liczne
        podróże po świecie pokazały jak wiele jest możliwości jeśli chodzi o
        zawód barbera.
      </p>
      <p>
        Posiadam uprawnienia z zakresu metodyki szkolenia osób dorosłych i
        organizacji szkoleń, a także uprawnienia dla Instruktorów praktycznej
        nauki zawodu.
      </p>
      <p>
        Jako instytucja szkoleniowa jesteśmy wpisani do RIS pod numerem
        22.22/00212/2022
      </p>
      <Image
        src={"/szkol.webp"}
        height={366}
        width={480}
        alt="Szkolenie"
        priority
        draggable="false"
        className="my-16"
      />
      <p>Jak zdobyć wyższy stopień barberignu… zapraszam pomogę Ci</p>
      <p>
        Gdyż dla mnie BARBERING to nie tylko strzyżenie, to jest cała filozofia,
        cała otoczka, rodzaj rytuału – taki męski świat gdzie w salonie główną
        rolę gra BARBER.
      </p>
      <p>
        Nauczę Cię co można zrobić z włosami, odpowiednio dobrane cięcie musi
        pasować do klienta – do jego stylu, kształtu twarzy. Dlatego, aby
        osiągnąć zamierzony efekt trzeba otworzyć się na potrzeby i oczekiwania
        klienta. Strzyżenie męskie musi być wykonane z wykorzystaniem
        odpowiednich technik i precyzji przez doświadczonego Barbera. Liczy się
        każdy najmniejszy ruch maszynką lub nożyczkami, a do tego właściwa
        pielęgnacja włosów jest bardzo istotna dla zachowania pięknego wyglądu i
        kondycji włosów.
      </p>
      <p>
        Pomogę Ci co zrobić z brodą i jak doporowadzić ją do porządku. Jest
        oczywiście szereg precyzyjnych zabiegów, to przede wszystkim trymowanie
        brody, czyli nadanie kształtu, skrócenie, odpowiednie wyprofilowanie do
        owalu twarzy, dostosowanie do typu osobowości i męskiej urody. Poprzez
        trymowanie i nadanie konturów brody możemy coś wyeksponować lub coś
        ukryć, na przykład za bardzo wyeksponowaną szczękę lub za mało wysunięty
        podbródek. To wszystko możemy wyprofilować zarostem. A takim podpisem
        barbera jest wyznaczenie konturów brody brzytwą, a więc wyznaczamy
        miejsce, gdzie ta broda powinna się zaczynać i powinna się kończyć.
      </p>
      <p>
        Słuchamy Twoich potrzeb – to pierwszy i najważniejszy krok do idealnej
        fryzury, aby wybrać najlepszą technikę strzyżenia oraz sprostać
        wszystkim Twoim oczekiwaniom. Rekomendujemy dla Ciebie – co możemy
        zmienić aby osiągnąć najlepszy rezultat? Podpowiemy jaka fryzura będzie
        dla Ciebie najlepsza. Specjalnie dobrana i spersonalizowana stylizacja,
        która spełni wszystkie Twoje oczekiwania. Dobieramy strzyżenie – każdy
        ruch nożyczkami i maszynką jest niezwykle istotny. Precyzyjne i dokładne
        strzyżenie to podstawa. Dlatego należy wybrać doświadczonego Stylistę z
        Milek Design. Stylizujemy fryzurę – Efekt końcowy zawdzięczamy
        modelowaniu i odpowiedniej stylizacji. Chcesz aby fryzura układała się
        sama? Dobierzemy do tego odpowiednie strzyżenie. Jeśli stylizujesz
        włosy, podpowiemy jak to zrobić i jakich produktów użyć, aby osiągnąć
        taki efekt, jaki chcesz.
      </p>
    </>
  );
}

export default Training;
