import Home from "./Home"
import { BrowserRouter } from 'react-router-dom';

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
};

export default App;
