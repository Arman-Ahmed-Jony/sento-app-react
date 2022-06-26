import "./style.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import * as React from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Roadmap = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="roadmapContainer">
      <div className="roadmap-text">
        <h2>GAME RAODMAP</h2>
        <p>
          We are guided by a simple yet profound vision - create the largest
          decentralized brand for the metaverse that is built and owned by the
          community.
        </p>
      </div>

      <div className="steps-container">
        {[
          { stepName: "Let's go", stepNumber: "01" },
          { stepName: "Level 1", stepNumber: "02" },
          { stepName: "Level 2", stepNumber: "03" },
          { stepName: "Level 3", stepNumber: "04" },
          { stepName: "Level 4", stepNumber: "05" },
          { stepName: "Level 5", stepNumber: "06" },
        ].map((step, index) => (
          <div className="step-container" key={index}>
            <div className="step-image" onClick={handleClickOpen}>
              <span className="index-name">{step.stepNumber}</span>
              <img src="./assets/village1.jpg" alt="" />
              <div className="step-name">STEP NAME</div>
            </div>
            <div className="bottom-step-name text-center mt-20">{step.stepName}
            <div className="indicator"></div>
            <div className="indicator2"></div>
            </div>
          </div>
        ))}
      </div>
        <hr className="bottom-line mb-20"/>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={"lg"}
        fullWidth={true}
        aria-describedby="alert-dialog-slide-description"
      >
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <DialogTitle>{"Step Name"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img src="./assets/village1.jpg" width={"100%"} alt="" />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Roadmap;
