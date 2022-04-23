import NftDetailsCard from "./NftDetailsCard";
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
const NftCard = ({ className, details }) => {
  const [open, setOpen] = useState(false)
  const handleOnClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
    
    <div
      className="flex flex-row rounded m-2 cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        style={{ width: "200px" }}
        src={details.thumbnail}
        alt=""
        loading="lazy"
      />
      
    </div>
    <Dialog onClose={handleClose} open={open}>
      <NftDetailsCard details={details}/>
      </Dialog>
    </>
  );
};

export default NftCard;
