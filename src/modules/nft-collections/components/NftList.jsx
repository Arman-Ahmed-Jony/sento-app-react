import {Stack, Box, Grid} from "@mui/material"
import NftCard from "./NftCard";
const NftList = () => {
  return <>
    <div className="flex flex-wrap ">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((i, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" key={index}>{i}</NftCard>)}
    </div>
  </>;
};

export default NftList;
