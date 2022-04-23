import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextField } from "@mui/material";
const NftFilter = () => {
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <div className="pb-2">
        <TextField
          fullWidth
          id="standard-basic"
          label="Search"
          variant="standard"
        />
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>TYPE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Human" />
            <FormControlLabel control={<Checkbox />} label="Armour" />
            <FormControlLabel control={<Checkbox />} label="Clothing" />
            <FormControlLabel control={<Checkbox />} label="Arsenal" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CLOTHING</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Light Kimono" />
            <FormControlLabel control={<Checkbox />} label="Maroon Yukata" />
            <FormControlLabel control={<Checkbox />} label="Blue Kimono" />
            <FormControlLabel control={<Checkbox />} label="Green Yukata" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>ARMOUR</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Ō-yoroi" />
            <FormControlLabel control={<Checkbox />} label="Turkish ceymer" />
            <FormControlLabel control={<Checkbox />} label="Persian Immortal" />
            <FormControlLabel control={<Checkbox />} label="Roman Lorica" />
            <FormControlLabel control={<Checkbox />} label="Mongolian Yuan lamellar" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>ARSENAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Katana" />
            <FormControlLabel control={<Checkbox />} label="Banner" />
            <FormControlLabel control={<Checkbox />} label="Leather Katana" />
            <FormControlLabel control={<Checkbox />} label="Lantern" />
            <FormControlLabel control={<Checkbox />} label="Bat" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NftFilter;
