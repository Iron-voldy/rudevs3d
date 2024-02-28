import React from "react";

const SoundSection = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".members-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title"></h2>
          <p className="text">OUR VISION</p>
          <span className="description">
            To revelutionize the industry by creating immersive and innovative
            experiences that trancend boundaries, captivate imaginations, and
            push the limits of virtual world
          </span>

          <p className="text">OUR MISSION</p>
          <span className="description2">
            Empower everyone worldwide through cutting edge technology, creative
            story telling and unparalleled experience, fostering a global
            community that celebrates the joy of technology.One pixel at a time
            , to redefine the possibilities of interactive entertainment
            ancreate lasting memories 

            <h2><b>objectives</b></h2>
            <ul>
              <li>
                {" "}
                <b>Innovation Leadership</b> -Continously push the boundaries of
                technology and creativity to deliver ground braking gaming
                experiences that set industry standards
              </li>
              <li>
                <b>Global commuity building</b> -Cultivate vibrant and inclusive
                gaming community by fostering positive interactions
              </li>
              <li>
                <b>Technological excellence</b> -Invest in research and
                development to stay at the forefront of tecnological advancement
              </li>
              <li>
                <b>Talent development</b>-Attract, nurture and retain top-tier
                talent to drive creativity, innovation and excellence in every
                aspect of game development
              </li>
            </ul>
          </span>

          <ul className="links">
            <li></li>

            <li>
              <a className="link" onClick={handleLearnMore}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
