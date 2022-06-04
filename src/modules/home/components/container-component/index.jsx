import "./style.scss";
const ContainerComponent = () => {
  return (
    <div className="container-component ">
      <div class="corners corners--repeated-lines">
        <div className="side-text">
          <h3>Two Cinematic Stories</h3>
          Take control of Earthrealm’s protectors in the game’s TWO critically
          acclaimed, time-bending Story Campaigns as they race to stop Kronika
          from rewinding time and rebooting history. Friendships are tested, and
          new alliances forged, in the battle to save all of existence.
        </div>
        <div className="side-image">
          <img src="../../" className="image" style={{border: '1px solid red'}}></img>
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;
