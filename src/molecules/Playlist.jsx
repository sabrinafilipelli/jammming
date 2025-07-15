import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Box from "@mui/material/Box";
import SaveToSpotifyButton from "../atoms/SaveToSpotifyButton";
import { Paper } from "@mui/material";

const listItems = [
  { iconImage: <ImageIcon />, title: "Photos", date: "Jan 9, 2014" },
  { iconImage: <WorkIcon />, title: "work", date: "Jan 9, 2014" },
  { iconImage: <BeachAccessIcon />, title: "vacation", date: "Jan 9, 2014" },
];

const Playlist = () => {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          width: "40%",
          backgroundColor: "pink",
          margin: "5rem",
          borderRadius: "1rem",
          minHeight: "55rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Playlist</h1>

        <List sx={{ width: "100%" }}>
          {listItems.map((item) => {
            return (
              <ListItem sx={{ borderBottom: "1px solid white" }}>
                <ListItemAvatar>
                  <Avatar>{item.iconImage}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.date} />
              </ListItem>
            );
          })}
        </List>

        <SaveToSpotifyButton />
      </Paper>
    </>
  );
};

export default Playlist;
