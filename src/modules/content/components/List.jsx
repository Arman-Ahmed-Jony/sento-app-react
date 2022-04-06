import React from "react";
import Content from "./Content";
// import DeleteIcon from '@mui/icons-material/Delete';

const List = ({contents}) => {
  // let [contents, setContents] = React.useState([{ key: "Header", value: "this is the header" }, { key: "description", value: "this is the description" }]);
  return (
    <div className="mt-7">
      {contents.map((content, index) => (
        <Content keyName={content.keyName} value={content.description} key={index} />
      ))}
    </div>
  );
}

export default List;

