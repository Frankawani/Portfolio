import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../Css/About.css";

function About() {
  const props1 = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
  });
  return (
    <div className="About">
      <div>
        <animated.div style={props1} className="About__contents">
          <h1 className="about__title">About Me</h1>
          <div className="About__description">
            <h3> My Story</h3>
          </div>
          <div className="About_further">
            <p>
              Currently I a Freelance Frontend Web Engineer at Upwork. A proud
              holder of a Second class Bsc Honours Degree in Computer Science. I
              have been working in computing years with some of the experience
              gained from internships
            </p>
            <h3 className="about__skillsTitle">My Skills</h3>
            <div className="about__skillslists">
              <ul>
                <li>Javascript</li>
                <li>CSS3</li>
                <li>ReactJS</li>
              </ul>
              <ul>
                <li>Git/Github</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="about__contacts">
            <div className="about__contact">
              <p className="about__first">RESIDENCE:</p>
              <p className="about__second">Asaba, Nigeria</p>
            </div>

            <div className="about__contact free">
              <p className="about__first">FREELANCE:</p>
              <p className="about__second"> Available</p>
            </div>
          </div>
          <div className="about__contact second">
            <p className="about__first">E-MAIL:</p>
            <p className="about__second"> Awanifrank@gmail.com</p>
          </div>
          <div className="About__buttons">
            <a
              href="https://drive.google.com/file/d/1ZQdyfrc0iwPMQ8xv9hv45v6r1yrvA4lz/view?usp=sharing"
              target={"_blank"}
            >
              <button className="About__button">Download Resume (200kb)</button>
            </a>
          </div>
          <div className="About__socialIcons">
            <div className="About__socialIconsCase">
              <a href="https://github.com/Frankawani" target="_blank">
                <GitHubIcon
                  style={{
                    fontSize: 20,
                    backgroundColor: "gray",
                    color: "#111",
                    padding: 1,
                    borderRadius: 3,
                  }}
                />
              </a>
              <a href="https://twitter.com/awanifrank1" target="_blank">
                <TwitterIcon
                  style={{
                    fontSize: 20,
                    backgroundColor: "gray",
                    color: "#111",
                    padding: 1,
                    borderRadius: 3,
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/frank-awani-2a2380240/"
                target="_blank"
              >
                <LinkedInIcon
                  style={{ fontSize: 26, color: "gray" }}
                  className="main__socialIconll"
                />
              </a>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default About;
