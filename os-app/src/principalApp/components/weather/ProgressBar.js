import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function progressBar(umidita) {
  return (
    <CircularProgressbar
      value={umidita.umidita}
      text={`${umidita.umidita}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: "butt",
        textSize: "16px",
        pathTransitionDuration: 0.5,
        pathColor: `rgba(62, 152, 199, ${umidita.umidita / 100})`,
        textColor: "#f88",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
      })}
    />
  );
}
