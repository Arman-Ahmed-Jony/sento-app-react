import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ContentForm from "./ContentForm";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Content({ keyName, value, id, onUpdate }) {
  const [dense] = React.useState(false);
  const [editDialog, setEditDialog] = React.useState(false);
  const [content, setContent] = React.useState(value);
  const [title, setTitle] = React.useState("");

  useEffect(() => {
    setContent(value);
    setTitle(keyName);
  }, [keyName, value]);

  const handleClose = () => {
    setEditDialog(false);
  };
  const handleUpdate = () => {
    onUpdate({id, title, content});
    handleClose()
  };
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <>
      <Grid item xs={12} md={6}>
        <Demo>
          <List dense={dense}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => setEditDialog(true)}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemText
                secondary={
                  <div className="flex flex-row my-4">
                    <div className="basis-2/12">{keyName}</div>
                    <div className="basis-10/12">
                    <div className="basis-2/12" dangerouslySetInnerHTML={{ __html: value }}/>
                    </div>
                  </div>
                }
              />
            </ListItem>
          </List>
        </Demo>
      </Grid>
      <Dialog
        open={editDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update the section in key value pairs"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ContentForm
              title={title}
              content={content}
              onTitleChange={onTitleChange}
              onContentChange={onContentChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleUpdate} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Content;
