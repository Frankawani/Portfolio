import React, { useState } from "react";
import "../Css/Main.css";
import { useSpring, animated, config } from "react-spring";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

function Main() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 800,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const props1 = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
  });

  return (
    <div className="main">
      <animated.div style={props1} className="main__contents">
        <animated.h3 style={props} className="main_blinka">
          Hi!... Im Frank!..
        </animated.h3>

        <div className="main__description">
          <h1> A world-class ReactJS Frontend Web Developer</h1>
        </div>
        <div className="main_further">
          <p>
            I have Extensive experience building solid and scalable Frontend web
            products, with great user experiences
          </p>
        </div>

        <div className="main__buttons">
          <Link to={"/MyWork"}>
            <button className="main__button">My Work</button>
          </Link>
          <Link to={"/AboutMe"}>
            <button className="main__button">About Me</button>
          </Link>
        </div>
        <div className="main__socialIcons">
          <div className="main__socialIconsCase">
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
  );
}

export default Main;
