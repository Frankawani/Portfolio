import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../Css/Contact.css";

const Result = () => {
  return (
    <p>Your Message has been successfully sent. I will contact you soon</p>
  );
};

function Contact() {
  const props1 = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -500 },
  });

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jy1s5s",
        "template_d9fdppz",
        e.target,
        "NtBLGxbGcVSGpF_ER"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };

  return (
    <div className="contact">
      <animated.div style={props1} className="contact__contents">
        <div className="contact__formpack">
          <h1>Say Hello!.</h1>
          <form action="" onSubmit={sendEmail} className="contact__form">
            <div className="forward">
              <span>Full Name</span>
              <br />
              <input
                className="input100"
                type={"text"}
                name="Fullname"
                required
              />
              <br />
              <span>E-mail</span>
              <br />
              <input
                className="input100"
                type={"email"}
                name="email"
                required
              />
            </div>
            <div className="formWord">
              <span>Messages</span>
              <br />
              <textarea name="message" required></textarea>
              <br />
              <input type="submit" value="Send" className="submit" />

              <div className="row">{result ? <Result /> : null}</div>
            </div>
          </form>
        </div>

        <div className="contact__socialIcons">
          <div className="contact__socialIconsCase">
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
                className="contact__socialIconll"
              />
            </a>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Contact;
