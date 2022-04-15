import React from 'react'
import './style.css'
function Website(props) {
    return ( <>
            <div class="navigator">
      <a href="#header-container">
        <div></div>
      </a>
      <a href="#description-container"><div></div></a>
      <a href="#upcommings-container"><div></div></a>
    </div>
    <div id="header-container">
      <header class="flex items-center">
        <div class="logo">
          <img src="./assets/SS-logo.png" alt="logo" />
        </div>
        <div class="menu-container">
          <div class="navbar" >
            <a class="active" href="#">NFT collections</a>
            <a href="#">ONNA-BUGEISHA</a>
            <a href="#">CYBORG SAMURAI</a>
            <a href="#">KAIJU</a>
            <a href="#">WHITE PAPER</a>
          </div>
        </div>
      </header>
      <section class="intro">
        <div
          class="section-container flex flex-col items-center justify-items-center"
        >
          <div>
            <h3>FIGHT TILL YOU DIE</h3>
            <div class="moto">
              <p>
                IF THEY STAND BEHIND YOU, PROTECT THEM, IF THEY STAND BESIDE
                YOU.
                <br />
                RESPECT THEM, IF THEY STAND AGAINST YOU, DEFEAT THEM.
              </p>
            </div>
            <div class="social-links">
              JOIN DISDORD <br />
              FOLLOW TWITTER
            </div>
          </div>
        </div>
        <div class="section-footer">
          <p>THE ULTIMATE BATTLE</p>
        </div>
      </section>
    </div>

    <main class="main-body-container">
      <div id="description-container">
        <div class="section-container">
          <div class="section-header">
            <h2>PLAY-TO-EARN GAME</h2>
          </div>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            mollitia non inventore consequuntur, aut assumenda animi tempore rem
            quisquam, perspiciatis maiores ut alias dolorum distinctio dolores
            obcaecati corrupti eum atque.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            illo, quisquam delectus corrupti, in deleniti nihil molestiae eius
            inventore, facere et cumque nulla dolore id accusamus? Fuga nulla
            mollitia non. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa, aperiam? Dicta recusandae velit ad, accusantium
            reiciendis quaerat architecto cupiditate dolores harum illum nihil
            magnam voluptate veritatis sapiente eos voluptates! Architecto?
            RELEASEING THE ULTIMATE BATTLE 2023
          </div>
        </div>
        <div class="section-footer">
          <p>LIMITED EDITION RELEASE</p>
        </div>
      </div>
      <section id="upcommings-container">
        <div class="section-header">
          <h2>UPCOMMING NFT COLLECTION</h2>
        </div>
        <div class="upcommings flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/v8scLToiiks?autoplay=1&mute=1"
          >
          </iframe>
        </div>
      </section>
    </main>
    </> );
}

export default Website;