import Home from "./Home"
import { BrowserRouter } from 'react-router-dom';
import './app.css';


const App = () => {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
};

export default App;
