import { TextField } from "@mui/material";
const ContentForm = ({ title, content, onTitleChange, onContentChange }) => {
    
  return (
    <>
      <div>
        <TextField
          required
          label="key"
          onChange={onTitleChange}
          value={title}
          fullWidth
        />
      </div>
      <div className="mt-4">
        <TextField
          id="outlined-multiline-flexible"
          label="Value"
          multiline
          maxRows={4}
          fullWidth
          onChange={onContentChange}
          value={content}
        />
      </div>
    </>
  );
};

export default ContentForm;
