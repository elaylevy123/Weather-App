import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppWeather from './components/appWeather';

function App() {
  return (
    <BrowserRouter>
      <AppWeather />
    </BrowserRouter>
  );
}

export default App;
