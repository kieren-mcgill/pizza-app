import Home from "./Home"
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark"
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
