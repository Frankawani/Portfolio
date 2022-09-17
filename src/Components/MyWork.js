import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../Css/MyWork.css";
import Work from "./Work";
import projectPic1 from "../Images/porfolioPic.png";
import amazon from "../Images/amazon.png";
import dashboard from "../Images/dashboard.png";
import netflix from "../Images/netflix.png";
import { useSpring, animated, config } from "react-spring";

function MyWork() {
  const props1 = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
  });
  return (
    <div className="mywork">
      <animated.div style={props1} className="mywork__contents">
        <h1 className="mywork__header">SOME OF MY NOTEWORTHY PROJECTS</h1>
        <div className="mywork__space">
          <div className="mywork__row">
            <Work
              image={netflix}
              projectName={"Netflix Clone"}
              projectDesc={
                "I built pixel perfect clone of The Netflix web app using ReactJS"
              }
              link={"https://awani-netflix-clone.web.app/"}
              github={"https://github.com/Frankawani/NetFlix-Clone.git"}
            />

            <Work
              image={amazon}
              projectName={"Amazon Clone"}
              projectDesc={
                "I built pixel perfect clone of The Amazon web app, using ReactJS,MUI, React Context Api, Firebase."
              }
              link={"https://awani--clone.web.app/"}
              github={"https://github.com/Frankawani/Amazon-Clone.git"}
            />

            <Work
              image={dashboard}
              projectName={"Admin Dasboard App"}
              projectDesc={
                "I built Admin dashboard app with Theming, Tables, and Charts"
              }
            />
          </div>

          <div className="mywork__row">
            <Work
              image={projectPic1}
              projectName={"My Portfolio"}
              projectDesc={
                "This is My personal portfolio website, built with ReactJS"
              }
            />
          </div>
        </div>
        <div className="socials">
          <div className="socials__casing">
            <a href="https://github.com/Frankawani" target="_blank">
              <GitHubIcon
                style={{
                  fontSize: 20,
                  backgroundColor: "#111",
                  color: "gray",
                  padding: 1,
                  borderRadius: 3,
                }}
              />
            </a>
            <a href="https://twitter.com/awanifrank1" target="_blank">
              <TwitterIcon
                style={{
                  fontSize: 20,
                  backgroundColor: "#111",
                  color: "gray",
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
                style={{ fontSize: 22, color: "gray", backgroundColor: "#111" }}
                className="mywork__socialIconll"
              />
            </a>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default MyWork;
