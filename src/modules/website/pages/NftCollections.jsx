import NftList from "../../nft-collections/components/NftList";
import NftFilter from "../../nft-collections/components/Filter";
const NftCollections = () => {
  return (
    <div className="flex flex-row p-2" style={{ paddingTop: "100px" }}>
      <div style={{width: '300px' }} className=" flex-none">
        <h4 className="font-bold">FILTER</h4>
        <NftFilter />
      </div>
      <div className="shrink">
        <h4 className="font-bold">SENTOs</h4>
        <NftList />
      </div>
    </div>
  );
};

export default NftCollections;
