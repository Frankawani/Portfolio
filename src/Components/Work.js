import React from "react";
import projectPic1 from "../Images/porfolioPic.png";
import "../Css/Work.css";
import { Button } from "@mui/material";

function Work({ image, projectName, projectDesc, link, github }) {
  return (
    <div className="work">
      <div className="work__image">
        <img src={image} alt="" className="work__photo" />
      </div>

      <div className="work__midsec">
        <div className="work__details">
          <h3 className="work__title">{projectName}</h3>
          <div>
            <p className="work__description">{projectDesc}</p>
          </div>
        </div>
        <div className="work__buttons">
          <a href={link} target="_blank">
            {" "}
            <Button
              style={{
                margin: 0,
                padding: 0,
                color: "black",
                fontSize: "12px",
              }}
              className="work__button"
            >
              SITE
            </Button>
          </a>
          <a href={github} target="_blank">
            <Button
              style={{
                margin: 0,
                padding: 0,
                color: "black",
                fontSize: "12px",
              }}
              className="work__button"
            >
              GITHUB
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
