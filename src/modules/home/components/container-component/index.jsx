import "./style.scss";
const ContainerComponent = () => {
  return (
    <div className="container-component ">
      <div className="corners corners--repeated-lines">
        <div className="side-text">
          <h3 className="text-gray-300"><span className="text-red-700">Two Cinematic</span> Stories</h3>
          <p className="text-gray-300">
          Take control of Earthrealm’s protectors in the game’s TWO critically
          acclaimed, time-bending Story Campaigns as they race to stop Kronika
          from rewinding time and rebooting history. Friendships are tested, and
          new alliances forged, in the battle to save all of existence.
          </p>
          
        </div>
        <div className="side-image">
          <img className="image" src={`${process.env.PUBLIC_URL}/assets/character-1.png`} alt="" />
          {/* <div className="image" style={{border: '1px solid red'}}></div> */}
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;
