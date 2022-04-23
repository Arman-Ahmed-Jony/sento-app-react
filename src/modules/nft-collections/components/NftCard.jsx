const NftCard = ({ className }) => {
  return (
    <div
    style={{width: '600px', height: '200px', backgroundColor: '#0a9afd47' }}
    className={`nft-card-container flex flex-row p-2 rounded ${className}`}
    >
      <img
        style={{width: '200px'}}
        src="https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg"
        alt=""
      />
      <div className="description p-2">
          <b>name:</b> nft name
          <br />
          <b>description: </b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque, esse dolore quae! Delectus fugiat, quae officiis voluptatum nihil
          <br />
          <b>type: </b> body
          <br />
          <b><a target={'_blank'} href="https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213" rel="noreferrer">OpenSea URL</a></b> 
      </div>
    </div>
  );
};

export default NftCard;
