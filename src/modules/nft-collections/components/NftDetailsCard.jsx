import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
const NftDetailsCard = ({className, details}) => {
  return (
    <div
      style={{ width: "600px", height: "300px", backgroundColor: "#0a9afd47" }}
      className={`nft-card-container flex flex-row pr-2 ${className}`}
    >
      <img
        style={{ width: "100%", aspectRatio: 'auto 1 / 1' }}
        src={details.thumbnail}
        alt=""
      />
      <div className="description p-2 relative">
        <b>name:</b> {details.name}
        <br />
        <b>description: </b> {details.description}
        <br />
        <b>type: </b> {details.type}
        <br />
        <span className="absolute top-0 right-0">
          <IconButton onClick={() => window.open(details.openSeaURL, "_blank")}>
            <LinkIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default NftDetailsCard;
