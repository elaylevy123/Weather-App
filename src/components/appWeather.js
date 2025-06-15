import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import WeahterForm from './weahterForm'
import WeatherInfo from './weatherInfo'

export default function AppWeather() {
  let [info,setInfo] = useState({});
  useEffect(() => {
    doApi("jerusalem")
  },[]);

  const doApi = async(_town) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=333bfa4905ca5f50692d239f449ef45b&units=metric`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setInfo(resp.data)
    
  }


  return (
    <React.Fragment>
      <WeahterForm doApi={doApi} />
      {info.name && <WeatherInfo info={info} />}
    </React.Fragment>
  )
}
