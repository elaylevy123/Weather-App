import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom'
import WeahterForm from './weahterForm'
import WeatherInfo from './weatherInfo'

export default function AppWeather() {
  let [info,setInfo] = useState({});
  const[query] = useSearchParams();
  let [errorMsg, setErrorMsg] = useState("");


  useEffect(() => {
    doApi(query.get("q"))
  },[query]);

  const doApi = async (_town) => {
    if (!_town || _town.trim() === "") {
      setErrorMsg("Please enter a city name");
      setInfo({});
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${_town}&appid=333bfa4905ca5f50692d239f449ef45b&units=metric`;

    try {
      const resp = await axios.get(url);
      setInfo(resp.data);
      setErrorMsg("");
    } catch (err) {
      console.error("API Error:", err);
      if (err.response && err.response.status === 404) {
        setErrorMsg("City not found. Please check the name.");
      } else {
        setErrorMsg("An error occurred. Please try again later.");
      }
      setInfo({});
    }
  };



  return (
    <React.Fragment>
      <WeahterForm doApi={doApi} />
      {errorMsg && (
          <div className="text-danger text-center mt-3">
            {errorMsg}
          </div>
      )}
      {info.name && <WeatherInfo info={info} />}

    </React.Fragment>
  )
}
