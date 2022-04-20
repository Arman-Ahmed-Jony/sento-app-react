import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    Stack,
  } from "@mui/material";
  import { useState } from "react";
  const NftForm = () => {
    const [type, setType] = useState("");
    const onFileChange = (evt) => {
      console.log(evt.target.files[0]);
    };
    const handleTypeChange = (evt) => {
      console.log(evt.target.value);
      setType(evt.target.value);
    };
  
    return (
      <Box component="div" sx={{ p: 2, bgColor: "red" }}>
        <Stack spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Description" variant="outlined" multiline />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type of NFT</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type of NFT"
              onChange={handleTypeChange}
            >
              <MenuItem value="Human">Human</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
              <MenuItem value="Color">Color</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Open Sea URL" variant="outlined" />
          <label>
            <input type="file" onChange={onFileChange} />
          </label>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="contained" color="primary">
              Add to marketplace
            </Button>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default NftForm;
  