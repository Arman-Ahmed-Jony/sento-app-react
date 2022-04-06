import List from "./components/List";
import Button from "@mui/material/Button";
import React, { Component } from "react";
import { getAllContent } from "./api/index";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import AddContentDialog from "./components/AddContentDialog";

class ContentIndex extends Component {
  state = {};
  componentDidMount() {
    getAllContent().then((res) => {
      this.setState({
        content: res.data,
      });
    });
  }
  render() {
    return (
      <>
        {this.state.content?.length ? (
          <List contents={this.state.content} />
        ) : (
          <span>loading.....</span>
        )}
        <div className="flex flex-row justify-end">
          <Box sx={{ "& > button": { m: 1 } }}>
            <Button variant="contained" className="">
              Update Content
            </Button>
            <AddContentDialog></AddContentDialog>
            {/* <Button variant="contained" className="" endIcon={<AddIcon />}>
              Add a new section
            </Button> */}
          </Box>
        </div>
      </>
    );
  }
}

export default ContentIndex;
// function ContentIndex() {
//   return (
//     <>
//       <List/>
//       <div className="flex flex-row justify-end">
//         <Button variant="contained" className="">
//           Update Content
//         </Button>
//       </div>
//     </>
//   );
// }

// export default ContentIndex;
