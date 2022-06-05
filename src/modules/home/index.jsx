import "./style.css";
import Button from "../../common-components/button";
import ContainerComponent from "./components/container-component/index";
function Home() {
  return (
    <div className="homeComponent">
      <div className="introduction">
        <img src="./assets/character-1.png" alt="character 1" />
        <div className="sub-section">
          <h1 className="text-left text-red-700">FROM THE SENTO SHIN</h1>
          <h1 className="text-left text-gray-300">TO THE ALLEY</h1>
          <br />
          <br />
          <Button />
        </div>
      </div>
      <div className="mid-section">
        <div className="sub-section">
          <h1 className="text-gray-300">THE DEFINITIVE</h1>
          <h1 className="text-red-700">MORTAL KOMBAT 11 EXPERIENCE</h1>
          <p className="caption text-gray-300 text-center">
            MORTAL KOMBAT 11 ULTIMATE INCLUDES MK11 BASE GAME, KOMBAT PACK 1, <br />
            AFTERMATH EXPANSION, AND NEWLY ADDED KOMBAT PACK 2.
          </p>
        </div>
        <div className="images-display-section">
        <div style={{height: '800px', position: 'relative'}} className="flex flex-row justify-center">
          <div style={{position: 'absolute', bottom: '0', width: '1000px'}} >
            <ContainerComponent/>
          </div>
        </div>
        </div>
        <div className="images-display-section">
        <div style={{height: '800px', position: 'relative'}} className="flex flex-row justify-center">
          <div style={{position: 'absolute', bottom: '0', width: '1000px'}} >
            <ContainerComponent/>
          </div>
        </div>
        </div>
        <div className="images-display-section">
        <div style={{height: '800px', position: 'relative'}} className="flex flex-row justify-center">
          <div style={{position: 'absolute', bottom: '0', width: '1000px'}} >
            <ContainerComponent/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
