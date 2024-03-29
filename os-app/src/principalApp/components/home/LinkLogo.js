import curriculum from "../../img/curriculum.png";
import qrCode from "../../img/qrCode.jpg";
import github from "../../img/octocat.png";
import linkedin from "../../img/linkedin.png";
import React, { useState } from "react";
import pdf from '../../pdf/CvValerioBoi.pdf'


export default function LinkLogo(props) {
  const [hovered, setHovered] = useState(false);
  const [hoveredCv, setHoveredCv] = useState(false);
  const [hoveredGit, setHoveredGit] = useState(false);
  const [hoveredLk, setHoveredCvLk] = useState(false);

  return (
    <>
      <a href={pdf} download>
        <img
          src={curriculum}
          alt="curriculum"
          width={props.size < 1168 ? "70px" :  "120px"}
          onMouseOver={() => setHoveredCv(true)}
          onMouseLeave={() => setHoveredCv(false)}
          style={{
            paddingRight: "18px",
            transform: `${hoveredCv ? "scale(1.2,1.2)" : "scale(1,1)"}`,
            transition: `${hoveredCv ? "0.5s" : "0.5s;"}`,
          }}
        />
      </a>

      <img
        src={qrCode}
        alt="qrCode"
        width={props.size < 1168 ? "70px" :  "120px"}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          paddingRight: "18px",
          transform: `${hovered ? "scale(1.2,1.2)" : "scale(1,1)"}`,
          transition: `${hovered ? "0.5s" : "0.5s;"}`,
        }}
      />

      <a href="https://github.com/Valerio-boi" target="_blank">
        <img
          src={github}
          alt="qrCode"
          width={props.size < 1168 ? "90px" :  "150px"}
          onMouseOver={() => setHoveredGit(true)}
          onMouseLeave={() => setHoveredGit(false)}
          style={{
            paddingRight: "18px",
            transform: `${hoveredGit ? "scale(1.2,1.2)" : "scale(1,1)"}`,
            transition: `${hoveredGit ? "0.5s" : "0.5s;"}`,
          }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/valerio-boi-7a55341a0/"
        target="_blank"
      >
        <img
          src={linkedin}
          alt="linkedin"
          width={props.size < 1168 ? "60px" :  "120px"}
          onMouseOver={() => setHoveredCvLk(true)}
          onMouseLeave={() => setHoveredCvLk(false)}
          style={{
            addingRight: "18px",
            transform: `${hoveredLk ? "scale(1.2,1.2)" : "scale(1,1)"}`,
            transition: `${hoveredLk ? "0.5s" : "0.5s;"}`,
            
          }}
        />
      </a>
    </>
  );
}
