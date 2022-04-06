import React from "react";
import TextField from '@mui/material/TextField';

function Content({ keyName, value, onChange }) {
  return (
    <>
      <div className="flex flex-row my-4">
        <div className="basis-1/4">{keyName}</div>
        <div className="basis-3/4">
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
    </>
  );
}

export default Content;
