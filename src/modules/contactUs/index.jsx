import "./style.scss";
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* <img className="background-image" src="./assets/Rectangle 8.png" alt="" /> */}
      <div className="introduction-section">
        <img src="./assets/main-character.png" alt="" />
        <div className="text-section">
          <h5>ABOUT US</h5>
          <h1>What is SENTO SHINU</h1>
          <p>
            Maecenas sit pretium, cras in. In quisque sem id eget. In vel
            gravida ut adipiscing integer felis. Id ac non arcu facilisi proin
            ultrices sed. Id accumsan quam viverra ante in id integer ut.
            Volutpat lobortis dolor etiam dis interdum tincidunt
            senectus.Maecenas sit pretium, cras in. In quisque sem id eget. In
            vel gravida ut adipiscing integer felis. Id ac non arcu facilisi
            proin ultrices sed. Id accumsan quam viverra ante in id integer ut.
            Volutpat lobortis dolor etiam dis interdum tincidunt senectus.
          </p>
        </div>
      </div>
      <div className="team-section">
        <div className="side-text">
          <h6>OUR TEAM</h6>
          <h3>MEET OUR TEAM</h3>
          <h5>WHO WE ARE</h5>
          <p>
            Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat
            tellus enim, nisl consectetur mauris. Venenatis congue id quis eget
            viverra. Vestibulum, justo, euismod congue feugiat eget fames
            gravida posuere.
          </p>
        </div>
        <div className="image-list">
          <img src="./assets/profile1.jpeg" alt="" />
          <img src="./assets/profile 2.jpg" alt="" />
          <img src="./assets/profile 3.jpg" alt="" />
        </div>
      </div>
      {/* <div className="partners-section">
        <h6>partnerS</h6>
        <h1>SENTO SHINU INVESTORS</h1>
        <div className="images-section">
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
          <img src="./assets/binance-icon.png" alt="" />
        </div>
      </div> */}
      <div className="contact-section">
        <div className="form">
          <h1>Have a question </h1>
          <p>Fill up the Form and ou team will get back to within 24 hrs</p>
          <input type="text" placeholder="NAME" name="" id="" /> <br />
          <input type="email" placeholder="EMAIL ADDRESS" name="" id="" />{" "}
          <br />
          <input placeholder="PHONE" name="" id="" /> <br />
          <input
            type="text"
            placeholder="TYPE YOUR MESSAGE"
            name=""
            id=""
          />{" "}
          <br />
          <button>SEND</button>
        </div>
        <div className="location">
          <h4>LOCATION:</h4>
          <p>
            2163 Phillips Gap Rd <br />
            West Jefferson,NC, 28694
          </p>
          <h4>Contact Us</h4>
          <p>+1 666 8888 <br />
Info.avitex@gmail.com</p>
<img src="./assets/demo-map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
