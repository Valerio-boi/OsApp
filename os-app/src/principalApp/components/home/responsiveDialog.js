import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = useState(false);
  const [full, setFull] = useState(false);
  const theme = useTheme();
  const fullScre = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const viewBadge = () => {
    if (props.flag) {
      return <img src={props.url} alt="CodeWars" />;
    } else {
      return "";
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ border: "0" }}
      >
        <img
          src={props.icon}
          alt="icon"
          width="120px"
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transform: `${hovered ? "scale(1.2,1.2)" : "scale(1,1)"}`,
            transition: `${hovered ? "0.5s" : "0.5s;"}`,
          }}
        />
      </Button>
      <Dialog
        fullScreen={fullScre}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Button
            style={{ float: "right" }}
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            <CloseRoundedIcon />
          </Button>
          {viewBadge()}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{props.contenuto}</DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
