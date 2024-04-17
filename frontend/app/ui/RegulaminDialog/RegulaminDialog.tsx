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
const REGULAMIN_HEADING = `Regulamin serwisu Primo's Barber Shop`;
const REGULAMIN_TEXT = `§1 Postanowienia ogólne

Serwis internetowy dostępny pod adresem   (dalej: "Serwis") jest własnością firmy Primo's Barber Shop, z siedzibą w ul. Romana Dmowskiego 6, 80-243 Gdańsk.

Niniejszy regulamin określa zasady korzystania z Serwisu oraz prawa i obowiązki Użytkowników oraz Administratora Serwisu.

§2 Usługi oferowane przez serwis

Serwis umożliwia Użytkownikom rezerwację wizyt u barberów, zapoznanie się z ofertą usługową salonu, jak również zakup produktów do pielęgnacji brody i włosów.

Szczegółowy opis usług, cennik oraz dostępne terminy rezerwacji są prezentowane na stronach Serwisu.

§3 Zasady korzystania z serwisu

Użytkownik zobowiązany jest do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.

Korzystanie z Serwisu jest możliwe po dokonaniu rejestracji i zaakceptowaniu regulaminu.

§4 Rezerwacja usług

Rezerwacja usług odbywa się za pośrednictwem dedykowanego systemu rezerwacyjnego dostępnego w Serwisie.

Anulacja lub zmiana terminu rezerwacji wymaga wcześniejszego kontaktu z salonem zgodnie z określonymi w Serwisie zasadami.

§5 Postanowienia końcowe

W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie odpowiednie przepisy prawa polskiego.

Polityka prywatności serwisu Primo's Barber Shop

§1 Informacje ogólne

Administratorem danych osobowych zbieranych za pośrednictwem Serwisu   jest firma Primo's Barber Shop, z siedzibą w ul. Romana Dmowskiego 6, 80-243 Gdańsk.

§2 Zakres i cel przetwarzania danych

Serwis zbiera dane osobowe podane dobrowolnie przez Użytkowników w celu realizacji rezerwacji usług, w tym imię, adres e-mail oraz numer telefonu.

Dane mogą być również przetwarzane w celach marketingowych, o ile Użytkownik wyrazi na to zgodę.

§3 Prawa użytkownika

Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.

Użytkownik może wycofać zgodę na przetwarzanie danych osobowych w dowolnym momencie.

§4 Pliki cookies

Serwis wykorzystuje pliki cookies w celu poprawy jakości świadczonych usług.

Użytkownik może samodzielnie zarządzać plikami cookies, zmieniając ustawienia swojej przeglądarki.

§5 Zmiany w polityce prywatności

Administrator Serwisu zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności.

O wszelkich zmianach Użytkownicy zostaną powiadomieni za pośrednictwem Serwisu.`;

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
            {REGULAMIN_TEXT}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{BUTTON_ACCEPT_TEXT}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
