import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const BUTTON_TEXT = `Przeczytaj Regulamin`;
const BUTTON_ACCEPT_TEXT = `Potwierdzam`;
const REGULAMIN_HEADING = `Regulamin i Polityka serwisu Primo's Barber Shop`;

function getRegulaminText() {
  return (
    <>
      <h2 className="my-8 font-bold text-2xl">Regulamin</h2>
      <ul>
        <li>
          <h3 className="font-bold">§1 Postanowienia ogólne</h3>
          <ul className="list-disc">
            <li>
              Serwis internetowy dostępny pod adresem (dalej:
              &quot;Serwis&quot;) jest własnością firmy Primo&apos;s Barber
              Shop, z siedzibą w ul. Romana Dmowskiego 6, 80-243 Gdańsk.
            </li>
            <li>
              Niniejszy regulamin określa zasady korzystania z Serwisu oraz
              prawa i obowiązki Użytkowników oraz Administratora Serwisu.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§2 Usługi oferowane przez serwis</h3>
          <ul className="list-disc">
            <li>
              Serwis umożliwia Użytkownikom rezerwację wizyt u barberów,
              zapoznanie się z ofertą usługową salonu, jak również zakup
              produktów do pielęgnacji brody i włosów.{" "}
            </li>
            <li>
              Szczegółowy opis usług, cennik oraz dostępne terminy rezerwacji są
              prezentowane na stronach Serwisu.{" "}
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§3 Zasady korzystania z serwisu</h3>
          <ul className="list-disc">
            <li>
              Użytkownik zobowiązany jest do korzystania z Serwisu w sposób
              zgodny z prawem, dobrymi obyczajami oraz postanowieniami
              niniejszego Regulaminu.{" "}
            </li>
            <li>
              Korzystanie z Serwisu jest możliwe po dokonaniu rejestracji i
              zaakceptowaniu regulaminu.{" "}
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§4 Rezerwacja usług</h3>
          <ul className="list-disc">
            <li>
              Rezerwacja usług odbywa się za pośrednictwem dedykowanego systemu
              rezerwacyjnego dostępnego w Serwisie.
            </li>
            <li>
              Anulacja lub zmiana terminu rezerwacji wymaga wcześniejszego
              kontaktu z salonem zgodnie z określonymi w Serwisie zasadami.{" "}
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§5 Postanowienia końcowe</h3>
          <ul className="list-disc">
            <li>
              W sprawach nieuregulowanych niniejszym Regulaminem mają
              zastosowanie odpowiednie przepisy prawa polskiego.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="my-8 font-bold text-2xl">Polityka prywatności</h2>
      <ul>
        <li>
          <h3 className="font-bold">§1 Informacje ogólne</h3>
          <ul className="list-disc">
            <li>
              Administratorem danych osobowych zbieranych za pośrednictwem
              Serwisu jest firma Primo&apos;s Barber Shop, z siedzibą w ul.
              Romana Dmowskiego 6, 80-243 Gdańsk.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§2 Zakres i cel przetwarzania danych</h3>
          <ul className="list-disc">
            <li>
              Serwis zbiera dane osobowe podane dobrowolnie przez Użytkowników w
              celu realizacji rezerwacji usług, w tym imię, adres e-mail oraz
              numer telefonu.
            </li>
            <li>
              Dane mogą być również przetwarzane w celach marketingowych, o ile
              Użytkownik wyrazi na to zgodę.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§3 Prawa użytkownika</h3>
          <ul className="list-disc">
            <li>
              Użytkownik ma prawo dostępu do swoich danych, ich sprostowania,
              usunięcia lub ograniczenia przetwarzania.
            </li>
            <li>
              Użytkownik może wycofać zgodę na przetwarzanie danych osobowych w
              dowolnym momencie.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§4 Pliki cookies</h3>
          <ul className="list-disc">
            <li>
              Serwis wykorzystuje pliki cookies w celu poprawy jakości
              świadczonych usług.
            </li>
            <li>
              Użytkownik może samodzielnie zarządzać plikami cookies, zmieniając
              ustawienia swojej przeglądarki.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§5 Zmiany w polityce prywatności</h3>
          <ul className="list-disc">
            <li>
              Administrator Serwisu zastrzega sobie prawo do wprowadzania zmian
              w Polityce Prywatności.
            </li>
            <li>
              O wszelkich zmianach Użytkownicy zostaną powiadomieni za
              pośrednictwem Serwisu.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegulaminDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {BUTTON_TEXT}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{REGULAMIN_HEADING}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {getRegulaminText()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{BUTTON_ACCEPT_TEXT}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
