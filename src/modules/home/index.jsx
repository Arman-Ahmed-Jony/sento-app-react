import "./style.css";
import Button from "../../common-components/button";
function Home() {
  return (
    <div className="homeComponent">
      <div className="introduction">
        <img src="./assets/character-1.png" alt="character 1" />
        <div className="sub-section">
          <h1 className="text-left">FROM THE SENTO SHIN</h1>
          <h1 className="text-left">TO THE ALLEY</h1>
          <br />
          <br />
          <Button />
        </div>
      </div>
      <div className="mid-section">
        <div className="sub-section">
          <h1>THE DEFINITIVE</h1>
          <h1>MORTAL KOMBAT 11 EXPERIENCE</h1>
          <p className="caption">
            MORTAL KOMBAT 11 ULTIMATE INCLUDES MK11 BASE GAME, KOMBAT PACK 1,
            AFTERMATH EXPANSION, AND NEWLY ADDED KOMBAT PACK 2.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
