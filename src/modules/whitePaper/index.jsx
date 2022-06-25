import "./style.scss";
const WhitePaper = () => {
  return (
    <div className="white-paper-container">
      <h2>Whitepaper</h2>
      <div className="page-container">
        <div className="page-section">
          <b>001.A</b>
          <h3>Introduction</h3>
          <p>
            Silks is the first derivative gaming platform that leverages a
            blockchain-enabled metaverse to parallel the real world of
            thoroughbred horse racing. The Silks metaverse is powered by a
            play-to-earn (P2E) gaming economy where anyone can experience the
            thrill of owning racehorses and horse farms, while reaping valuable
            tokens through skilled gameplay and contributions to the ecosystem.
            The Silks community will have the ability to acquire, collect, trade
            and interact with digital assets that represent actual thoroughbred
            racehorses in the real world. Furthermore, they'll have the ability
            to acquire and develop land and horse farms, as well as other
            interactive digital assets that are necessary to support and grow
            the Silks economy. At its core, Silks is an innovative, engaging and
            skill-based game that promotes collaboration between racehorse
            owners, horse farm owners and land speculators to optimize rewards
            and offset risk in the high-stakes world of thoroughbred racing.
          </p>
        </div>
        <div className="page-section">
          <b>001.B</b>
          <h3>SILKS MISSION</h3>
          <p>
            The Silks mission is to democratize thoroughbred racehorse ownership
            for the masses and gamify the experience utilizing a
            blockchainenabled metaverse and a P2E economy. In doing so, it will
            introduce the excitement of thoroughbred racing to a new tech-driven
            and culturally distinct generation of enthusiasts.
          </p>
        </div>
        <div className="pagination-container">
            <div className="previous cursor-pointer">Previous</div>
            <div className="page-number">1|18</div>
            <div className="next cursor-pointer">Next</div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
