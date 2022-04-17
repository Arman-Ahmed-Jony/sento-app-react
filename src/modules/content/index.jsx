import List from "./components/List";
import Button from "@mui/material/Button";
import React, { Component } from "react";
import { getAllContent, createContent, updateContent } from "./api/index";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import AddContentDialog from "./components/AddContentDialog";

class ContentIndex extends Component {
  constructor(props) {
    super(props);
    this.handleContentSave = this.handleContentSave.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.getContents = this.getContents.bind(this);
  }
  state = {};
  componentDidMount() {
    this.getContents()
  }
  getContents() {
    getAllContent().then((res) => {
      this.setState({
        content: res.data,
      });
    });
  }
  handleContentSave = (content) => {
    createContent({ keyName: content.title, description: content.content })
      .then((res) => {
        this.getContents();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleUpdate = (content) => {
    updateContent({
      keyName: content.title,
      description: content.content,
      id: content.id,
    })
      .then((res) => {
        this.getContents()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        {this.state.content?.length ? (
          <List contents={this.state.content} onUpdate={this.handleUpdate} />
        ) : (
          <span>loading.....</span>
        )}
        <div className="flex flex-row justify-end">
          <Box sx={{ "& > button": { m: 1 } }}>
            <AddContentDialog
              onSave={this.handleContentSave}
            ></AddContentDialog>
          </Box>
        </div>
      </>
    );
  }
}

export default ContentIndex;
