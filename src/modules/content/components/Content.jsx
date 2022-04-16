import * as React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Content({ keyName, value, onChange }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <>
      <Grid item xs={12} md={6}>
        <Demo>
          <List dense={dense}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemText
                secondary={
                  <div className="flex flex-row my-4">
                    <div className="basis-2/12">{keyName}</div>
                    <div className="basis-10/12">
                      <TextField
                        required
                        id="outlined-required"
                        label={keyName}
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue={value}
                      />
                    </div>
                  </div>
                }
              />
            </ListItem>
          </List>
        </Demo>
      </Grid>
    </>
  );
}

export default Content;
