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
      className="flex flex-row  m-2 cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        style={{ width: "200px", height:"200px" }}
        src={details.thumbnail}
        alt=""
        className="rounded-lg hover:scale-110 hover:shadow-2xl transition duration-150 ease-in-out"
        loading="lazy"
      />
      
    </div>
    <Dialog fullWidth={true} maxWidth={'md'} onClose={handleClose} open={open}>
      <NftDetailsCard details={details}/>
      </Dialog>
    </>
  );
};

export default NftCard;
