import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./molecules/SearchBar";
import Playlist from "./molecules/Playlist";
import Tracklist from "./molecules/Tracklist";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchButton from "./atoms/SearchButton";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", textAlign: "center" }}>
      <AppBar position="static">
        <Toolbar>
          <h1
            className="bounce"
            style={{ margin: "1rem auto", cursor: "pointer" }}
          >
            Jammming
          </h1>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="appContainer">
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
        <SearchBar />
        <SearchButton />
      </Box>

      <Box className="lists">
        <Tracklist />
        <Playlist />
      </Box>
    </Box>
  );
}

export default App;
