import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Zoom, Fade, Bounce } from "react-awesome-reveal";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="space-top">
      <h1 className="head1">
        {" "}
        <Zoom left>Aspiring Dev full time</Zoom>
      </h1>

      <h3 className="head3">
        {" "}
        <Bounce left>
          Welcome there!
        </Bounce>
      </h3>

      <p className="para1">
        {" "}
        <Bounce left >
          My name is Abhishek and im your guest!
        </Bounce>{" "}
      </p>

      <div className="link-wrap">
        <a className="Links" href="https://github.com/Abhishekcs96">
          <Bounce top >
            <FaGithubSquare />
          </Bounce>
        </a>

        <a
          className="Links"
          href="https://www.linkedin.com/in/abhishek-chandra-sekar-4018a8137/"
        >
          <Bounce top>
            <FaLinkedin />
          </Bounce>
        </a>
      </div>
    </div>
  );
};

export default Home;
