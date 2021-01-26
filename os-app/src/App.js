import "./App.css";
import { useEffect, useState } from "react";
import TimeLine from "./principalApp/components/home/timeLine";
import Grid from "./principalApp/components/home/myapp";
import LinkLogo from "./principalApp/components/home/LinkLogo";
import Clock from "./principalApp/components/home/clock";

function App() {
  const url =
    "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Roma,it&units=metric&lang=it&appid=4f188f6387e39a4dbabd5d915e951903";
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setWeather(res));
  }, []);

  console.log(weather);
  return (
    <div className="root">
      <Grid
        timeline={<TimeLine />}
        link={<LinkLogo />}
        clock={<Clock />}
        weather={weather}
      />
    </div>
  );
}

export default App;
