import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
const NftDetailsCard = ({className, details}) => {
  return (
    <div
      style={{ width: "900px", height: "400px", backgroundColor: "#0a9afd47" }}
      className={`flex flex-row pr-2 ${className}`}
    >
      <img
        style={{ width: "350px", aspectRatio: 'auto 1 / 1' }}
        src={details.thumbnail}
        alt=""
      />
      <div className="p-2 grow relative">
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
