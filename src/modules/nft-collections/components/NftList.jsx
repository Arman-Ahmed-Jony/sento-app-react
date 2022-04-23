import NftCard from "./NftCard";
const NftList = () => {
  const list = [
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://naijahelper.com/wp-content/uploads/2022/02/7b31527e3699423b90b81de2584dc381.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://www.upwork.com/catalog-images-resized/7f4d77e927c686982036b052eba834cc/large',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://naijahelper.com/wp-content/uploads/2022/02/7b31527e3699423b90b81de2584dc381.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://www.upwork.com/catalog-images-resized/7f4d77e927c686982036b052eba834cc/large',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://naijahelper.com/wp-content/uploads/2022/02/7b31527e3699423b90b81de2584dc381.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://www.upwork.com/catalog-images-resized/7f4d77e927c686982036b052eba834cc/large',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://naijahelper.com/wp-content/uploads/2022/02/7b31527e3699423b90b81de2584dc381.jpg',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    },
    {
      name: 'nft name',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis tenetur ipsam adipisci atque',
      type: 'Body',
      thumbnail: 'https://www.upwork.com/catalog-images-resized/7f4d77e927c686982036b052eba834cc/large',
      openSeaURL: 'https://opensea.io/assets/0x07ce5d64b7b845c8ff645e9a3825f94e6bdd82f1/4213'
    }
  ]
  return <>
    <div className="flex flex-wrap ">
      
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
        {list.map((item, index) => <NftCard className="m-3 hover:shadow-2xl cursor-pointer" details={item} key={index}/>)}
    </div>
  </>;
};

export default NftList;
