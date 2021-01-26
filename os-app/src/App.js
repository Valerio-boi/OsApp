import "./App.css";
import { useEffect, useState } from "react";
import TimeLine from "./principalApp/components/home/timeLine";
import Grid from "./principalApp/components/home/myapp";
import LinkLogo from "./principalApp/components/home/LinkLogo";
import Clock from "./principalApp/components/home/clock";

function App() {
  const urlWeather =
    "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Roma,it&units=metric&lang=it&appid=4f188f6387e39a4dbabd5d915e951903";
  const urlNews =
    "https://gnews.io/api/v3/search?lang=it&q=attualita&token=e9b0f9bef2ec016a61cc797098150f61";

  const [weather, setWeather] = useState({});
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(urlWeather)
      .then((res) => res.json())
      .then((res) => setWeather(res));

    fetch(urlNews)
      .then((res) => res.json())
      .then((res) => setNews(res.articles));
    console.log(news);
  }, []);

  console.log(weather);
  return (
    <div className="root">
      <Grid
        timeline={<TimeLine />}
        link={<LinkLogo />}
        clock={<Clock />}
        weather={weather}
        news={news}
      />
    </div>
  );
}

export default App;
