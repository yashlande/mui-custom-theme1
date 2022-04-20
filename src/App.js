import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import SmallComponent from "./SmallComponent";
import "./App.css";

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createTheme({
    // Theme settings
    palette: {
      mode: toggleDark ? "dark" : "light",
    },
  });

  console.table(myTheme);
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <SmallComponent toggleDark={toggleDark} settoggleDark={settoggleDark} />
      </ThemeProvider>
    </div>
  );
}

export default App;
