import * as React from "react";
import {
  IconButton,
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AddIcon from "@mui/icons-material/Add";

const listItems = [
  { iconImage: <ImageIcon />, title: "Photos", date: "Jan 9, 2014" },
  { iconImage: <WorkIcon />, title: "work", date: "Jan 9, 2014" },
  { iconImage: <BeachAccessIcon />, title: "vacation", date: "Jan 9, 2014" },
];

const Tracklist = () => {
  return (
    <>
      <Box
        sx={{
          width: "40%",
          backgroundColor: "rgba(112, 40, 145, 0.53)",

          margin: "5rem",
          borderRadius: "1rem",
          minHeight: "55rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Tracklist</h1>

        <List sx={{ width: "100%" }}>
          {listItems.map((item) => {
            return (
              <ListItem
                sx={{
                  borderBottom: "1px solid white",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar>{item.iconImage}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.title} secondary={item.date} />
                </Box>
                <Box>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default Tracklist;
