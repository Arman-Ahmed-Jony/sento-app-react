import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
function AddContentDialog({onSave}) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSave = () => {
    onSave({title, content});
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  } 
  const handleContentChange = (event) => {
    setContent(event.target.value);
  } 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className=""
        endIcon={<AddIcon />}
      >
        Add a new section
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add a new section in key value pairs"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <TextField required label="key" onChange={handleTitleChange} value={title} fullWidth />
            </div>
            <div className="mt-4">
              <TextField
                id="outlined-multiline-flexible"
                label="Value"
                multiline
                maxRows={4}
                fullWidth
                onChange={handleContentChange} value={content}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleSave} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddContentDialog;
