import React from "react";
import Content from "./Content";
// import DeleteIcon from '@mui/icons-material/Delete';

const List = ({contents, onUpdate}) => {
  return (
    <div className="mt-7">
      {contents.map((content, index) => (
        <Content keyName={content.keyName} value={content.description} id={content.id} onUpdate={onUpdate} key={index} />
      ))}
    </div>
  );
}

export default List;

