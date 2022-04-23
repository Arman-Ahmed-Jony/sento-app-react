import {Stack, Box, Grid} from "@mui/material"
const NftList = () => {
  return <>
    <Grid wrap="nowrap" direction="row" spacing={10}>
        {[1,4,3,2,5,6,7,7,8,8,965,5,4,4,3].map((i, index) => <Box sx={{ backgroundColor: 'red'}} key={index}>{i}</Box>)}
    </Grid>
  </>;
};

export default NftList;
