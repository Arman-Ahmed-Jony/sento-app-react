import "./style.scss";
import Button from "../../common-components/button";
import ContainerComponent from "./components/container-component/index";
function Home() {
  return (
    <div className="homeComponent">
      <div className="introduction">
        <img src="./assets/main-character.png" alt="character 1" />
        <div className="sub-section">
          <h1 className="text-left text-red-700">FROM THE SENTO SHINO</h1>
          <h1 className="text-left text-gray-300">TO THE ALLEY</h1>
          <br />
          <br />
          <div style={{marginBottom: '5px'}}>
          <Button value="A TRUSTY SIDEKICK   →" />
          </div>
          <Button value="VIEW GALLERY   →" backgroundColor="transparent" />
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
            <ContainerComponent skew="10deg"/>
          </div>
        </div>
        </div>
        <div className="images-display-section">
        <div style={{height: '800px', position: 'relative'}} className="flex flex-row justify-center">
          <div style={{position: 'absolute', bottom: '0', width: '1000px'}} >
            <ContainerComponent skew="-10deg"/>
          </div>
        </div>
        </div>
        <div className="images-display-section">
        <div style={{height: '800px', position: 'relative'}} className="flex flex-row justify-center">
          <div style={{position: 'absolute', bottom: '0', width: '1000px'}} >
            <ContainerComponent skew="10deg"/>
          </div>
        </div>
        </div>
      </div>
      <div className="team-section">
        <div className="side-text">
          <h6>OUR TEAM</h6>
          <h3>MEET OUR TEAM</h3>
          <h5>WHO WE ARE</h5>
          <p>
          Purus, laoreet dui augue ut euismod. Elementum ante
          sociis volutpat tellus enim, nisl consectetur mauris.
          Venenatis congue id quis eget viverra. Vestibulum, 
          justo, euismod congue feugiat eget fames gravida posuere. 
          </p>
        </div>
        <div className="image-list">
          <img src="./assets/profile1.jpeg" alt="" />
          <img src="./assets/profile 2.jpg" alt="" />
          <img src="./assets/profile 3.jpg" alt="" />
        </div>
      </div>
      <div className="discover-section">
        <div className="header-text">
          <h2>DISCOVER MORE</h2>
          <p>Take control of Earthrealm’s protectors in the game’s TWO critically </p>
        </div>
        <div className="images-section">
          <img src="./assets/character1.jpeg" alt="" /><img src="./assets/character2.jpg" alt="" /><img src="./assets/character3.jpg" alt="" />
          <img src="./assets/character1.jpeg" alt="" /><img src="./assets/character2.jpg" alt="" /><img src="./assets/character3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
