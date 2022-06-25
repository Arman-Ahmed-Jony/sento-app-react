import Button from "../../common-components/button";
import "./style.scss";
const Gallery = () => {
  return (
    <div className="gallery-container">
      {/* <img className="background-image" src="./assets/Rectangle 8.png" alt="" srcset="" /> */}
      {/* <img srcSet={"../../../public/assets/Rectangle 8.png"} alt="" /> */}
      <div className="text-section">
        <h3>Our Gallerry</h3>
        <p>
          We are guided by a simple yet profound vision - create <br /> the
          largest decentralized brand
        </p>
        <div className="filter-section">
        <Button value="SPECIAL" backgroundColor="#b9b6b654" />
        <Button value="CLOTHING" backgroundColor="#b9b6b654" />
        <Button value="OFFHAND" backgroundColor="#b9b6b654" />
        <Button value="HAIR" backgroundColor="#b9b6b654" />
        <Button value="HEADGEAR" backgroundColor="#b9b6b654" />
        <Button value="FACE" backgroundColor="#b9b6b654" />
        <Button value="NECK" backgroundColor="#b9b6b654" />
      </div>
      </div>
      
      <div className="image-section">
        {[
          "./assets/character-1.png",
          "./assets/character-3.png",
          "./assets/character-4.png",
          "./assets/character-5.png",
          "./assets/character-1.png",
          "./assets/character-3.png",
          "./assets/character-4.png",
          "./assets/character-5.png",
          "./assets/character-1.png",
          "./assets/character-3.png",
          "./assets/character-4.png",
          "./assets/character-5.png",
          "./assets/character-1.png",
          "./assets/character-3.png",
          "./assets/character-4.png",
          "./assets/character-5.png"
        ].map((url, index) => (
          <div key={index} className="image">
            <div className="background">
              <img src="./assets/background3.jpg" alt="" srcset="" />
            </div>
            <div className="character">
              <img src={url} alt="" srcset="" />
            </div>
            <div className="description">
              <h5 className="text-gray-300 font-bold">THE GAME NAME</h5>
              <p className="text-red-700">GAME NAME</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
