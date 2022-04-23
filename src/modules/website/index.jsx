import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getAllContent } from "./api";
import "./style.css";
function Website(props) {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      return await getAllContent();
    };
    fetchData().then(({ data }) => {
      setContents(data);
    });
  }, []);
  const getContentByKey = (key) => {
    if (!contents.length) {
      return ''
    }
    return contents?.find((content) => content.keyName === key).description;
    
  }
  return (
    <>
      <div className="navigator">
        <a href="#header-container">
          <div></div>
        </a>
        <a href="#description-container">
          <div></div>
        </a>
        <a href="#upcommings-container">
          <div></div>
        </a>
      </div>
      <div id="header-container">
        <section className="intro">
          <div className="section-container flex flex-col items-center justify-items-center">
            <div>
              <h3>{getContentByKey('intro heading')}</h3>
              <div className="moto">
                <p dangerouslySetInnerHTML={{ __html: getContentByKey('intro body') }}/>
              </div>
              <div className="social-links">
                JOIN DISDORD <br />
                FOLLOW TWITTER
              </div>
            </div>
          </div>
          <div className="section-footer">
            <p>{getContentByKey('intro footer')}</p>
          </div>
        </section>
      </div>

      <main className="main-body-container">
        <div id="description-container">
          <div className="section-container">
            <div className="section-header">
              <h2>{getContentByKey('description heading')}</h2>
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: getContentByKey('description body') }}/>
          </div>
          <div className="section-footer">
            <p>{getContentByKey('description footer')}</p>
          </div>
        </div>
        <section id="upcommings-container">
          <div className="section-header">
            <h2>{getContentByKey('upcommings heading')}</h2>
          </div>
          <div className="upcommings flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              title="upcoming glimps"
              src={getContentByKey('upcommings video')}
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}

export default Website;
