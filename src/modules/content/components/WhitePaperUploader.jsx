import { Button } from "@mui/material";
import { useState } from "react";
const WhitePaperUploader = () => {
  const [file, setFile] = useState(null);
  const handleSubmit = (evt) => {
      console.log(file);
  };
  const onFileChange = (evt) => {
      console.log(evt.target.files[0]);
    setFile(evt.target.files[0]);
  };
  return (
    <>
      upload White Paper: <br />
      <input
        type="file"
        id="whitePaper"
        onChange={onFileChange}
        name="filename"
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleSubmit}>
        Upload
      </Button>
    </>
  );
};

export default WhitePaperUploader;
