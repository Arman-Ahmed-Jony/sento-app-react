import {Stack, Box} from "@mui/material"
const NftList = () => {
  return <>
    <Stack direction="row" spacing={10}>
        {[1,4,3,2,5,6,7,7,8,8,965,5,4,4,3].map((i, index) => <Box sx={{ backgroundColor: 'red'}} key={index}>{i}</Box>)}
    </Stack>
  </>;
};

export default NftList;
