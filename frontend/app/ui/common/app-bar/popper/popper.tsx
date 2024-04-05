import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import InfoIcon from "@mui/icons-material/Info";

export default function PhoneInfoPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div className="max-md:hidden">
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <InfoIcon className="text-neutral-400" />
      </button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                zIndex: 100,
                border: 1,
                p: 1,
                bgcolor: "background.paper",
                color: "text.primary",
                borderRadius: 1,
              }}
            >
              Zgłoszenia na szkolenia przyjmujemy pod nr telefonu:
              <a
                href="tel:+48798272797"
                className="w-fit block px-4 py-4 ml-2 text-black rounded-full bg-orange-400 hover:bg-orange-500 font-bold"
              >
                +48 798 272 797
              </a>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
