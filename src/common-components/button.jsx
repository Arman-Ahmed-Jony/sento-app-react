import "./style.scss";
const Button = ({ value = "button", backgroundColor="rgba(255, 0, 0, 0.445)" }) => {
  return (
    <div style={{display: 'inline'}}>
      <div className="custom-button-container">
        <div className="section one">
          <div className="button" style={{backgroundColor}}>
          {value}
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
            <div className="ring four"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
