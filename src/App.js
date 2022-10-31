import { ThemeProvider } from "styled-components";
import "./App.css";

import AppRouter from "./router/Approuter";
const style = {
  colors: {
    header: "#042940",
    body: "#005C53",
    text: "#D6D58E",
  },
  margins: {},
  responsive: "724px",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={style}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
